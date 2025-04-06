/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5MJc355BmnDBt4hUHvafeBtn6pT4CSU8jU8QmvyG2MwFEeirFQegx7uDaAhmh9DzwgPMeHE19hDK71BhmeDA26Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcckPVYPjkzpix8jeMX3Jdwep33d4tFmfDqmDvqxAWfDP1Biiiz993j9Rc3cMTK34ZzNgrHJERqZuHNvN2NE1LZ",
  "key1": "4R6rzWywPNqPHcQR74WTuPxkwBKRD6zvYKZsKUuwMFR8guG23k9oRJhUaizhwA9kHhMYnnNSa4Wp4Tcz3DRFgvwm",
  "key2": "2B8z6jnQNmx7MPCSaVarozaFnyjW3RmAVwqUZvDLbNP3udzXtZCD6RHB5UF8L1qLVVbsAiQQKKbEPfNeDbdoaR1L",
  "key3": "3kzrJxLvxsNNdBGsCsuxhxbJEG7HuDD5sKw7he9JC9ntJrGop1r2Qm7pv2om2utAhjANa7j2eDm7sxR8k3zozGCW",
  "key4": "4mMhCAdkLdgz6yq3ky8W32AiamRLXoLBvLWEPWxAp1dBMqfJpsJ1rH3JyAuP3kYfCKnSQ1pCBLXqKcZiC9uVHbke",
  "key5": "sCxE9ERuSBkJsYUL2dgaj5oJzqc5P47FTw6SXjnMMfQXPZrfRHDu1MnZd4V2ypdphd2A1f136rB5D5jp54v7CVg",
  "key6": "2rMWwzkHyjUK34WXFSSRQWkNhhLdntygVY2anbfY4iGcqQK51oaZDyZckbNNFXirjNR1estainSfPwxfUz5aJq6u",
  "key7": "qZronddJCzxcfDoMy7kd5SrAXEvqDM13AcNn1sqE9GLqYpqsd7uKa1iZVoK6MmB39sAuAeSN2dD1AoKhN1gjgxy",
  "key8": "5PiZ6jEEwN3YKsVeRwP72DU25BnCCZgra43ShTtw4AkEFddZwoqPNAsZKCg1XkukcDe2NuDtuKTZeCt199kLvSPY",
  "key9": "fbKfr677CAH5Qp66miuUrHig6NCjCozzgsazJqcZg8yYtR7MNsDRuGSoGfWqXscpMPkxXyTfpZhUvfF1AAS3iLy",
  "key10": "5qFpDax4fpgS8tXTBKEGr8J6sLNsd422ZGJWNCPsXfiWShqPCumNwdL9PGCHf9Nq3b28Tq1WG4fP1VKks32WTi8h",
  "key11": "4Mqe6gvuFdYnqKcUvMBGpusLkVqK8EZ292LtMtQocyXz278BpWAi3t8Re8TZGXfwgPVFYgnFBpT6in4LboqvybgR",
  "key12": "41dQum5aF9HXvjWYAixDWaw92tGouwwzJeggbRBqmRYyw48iL2WciQh2ciqsbgYi6p3D42TefMzVTvYSiNtwuWVs",
  "key13": "53fpShBVFT3yhfKzR8V13qQ7NuSqUG9mAtKWX5HdXqc1auxDD693NJbva4hGK3agQWYJGHwkfeMDrEHHw6GrsEnj",
  "key14": "4nr4SuxHnuzMirxPNknz5auZrmjA1gcT3ygxAM3TXF37SRL5ANyNxEFhjtryXwZmWFksjPYL1yqg9mL3HTUFkh5Y",
  "key15": "3QMn8GEeKH1WjR7xj2EEuTHLBj8z64zeykSL6YduemBuNBMqviexaHsFAXSkYKMLxo285XTAtGvsTxAJwiCvfNJS",
  "key16": "4UHjXE1baEKbe7Y3eDYpgwys2YfGNw3ccZLqfDnz7iYbTnp2NgatrgefBBDAbYdctURi8WkpB5L5WFSCXw5wKTUz",
  "key17": "QK3U3EiTJovmEeugNPkAD1pUTTPJX46zwZJUkdufbsdT9dnReJ1DuCyS5bdcXp3kCE7tjRSq84HVsmoXPF3AiD2",
  "key18": "3fo1eehetcUoJuBu1w3pZwqXQSqzGwA298e74nQUPHiYPVow5HiKnCTQdVEzURDSLho1SCYtdBJCFtViWceBhTSy",
  "key19": "3j7Y3tzKv34sykMp8pqSoaiPhjPMCKU2NWRRpinkETXPpvoLtgFiwZRToKphJX5j3wAj6w6X2M4MBzxUK4ZsTfDN",
  "key20": "3GHYeRPuLE27D1hCmEUDvjBtiEUPThG5tYxeU4TPb59W76wVRP5iSHb8JbC1D3odzr2xwgHTfLRkefTd172oJXZ8",
  "key21": "3yZjqWbTWQQJAr2QWAnLDvZLWpy4ni8122Rq3uXGfdXf1Qap5ff4NRkYnSYy6sTy9uYkpgYpMS9bGNtDkZoa61CQ",
  "key22": "5pjhXenmohjfX15GYMYNpDL1ydoC5f9i6mVZHjXMSjTotECb3CHGVY9zFxEuACCdhbp288ZD17n9imxr8RcfJ6b3",
  "key23": "5E3H7RK9bFFGZFgwCUKCFYcmQ5NHLpdFZnLPg5NfPMS75JotubrVw5tN6XUf8sG5RNJvgFgLFR9w381YwZpsSw68",
  "key24": "4tLwPnZktp3tgQTK7qjmbbjyKP5W2nXoMAWvw3SE6ew3BRbabNYwyfKi61exMhHyF31EJ7N8g1xae1Jfg82XHUd2",
  "key25": "3piQoFxQxngcmEXvLdfNREP5kZHsyMLCXDGtfyW3tHY44ZZGFegCXyRGmF42XiMFzmQRaf9S8DhPbuZYfSU3oMvi",
  "key26": "CeHxKaDY5TQKSJshvHT3yAioVoQNqpZwWs1Nh8n7QVkYgPWXciCpNLHZZrtj36RA8sGpz1PUZja7BpbNaccYJpn",
  "key27": "5hJB8EoF7zV3icx8wZMSKEUuiDmpLCKu5gKiGTpme3F4bfPyujmLV985RGVKLcLZp8kQaGgkftXwMt2eX4MpkKx1",
  "key28": "3zuKriycLNMJ2JLYNmSm7yKqUVKDB4E7WWM1WdC2nwCVj8Xs3gpSBaNKey6Ny977imBatFjKz8SFYvDV2u7zQLZd",
  "key29": "nMRUzUmHY2acjTJwVoJKNJU25pNzvVA9k4nmYmmtmwxqB7QPwDxjga4wBNLebH9P8fk1bWmD84ECuJ898GzP1Cw"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
