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
    "3Zp5nK93ucAsVPioZy7NzB8Xi84yawNZTmsbtrkGJERLrdpNjNutHLTiHuxgCfXXWGAwibh3kF3gsFyXMbDAsx24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYvFGgxsKYvdQwApbcJn3kasMXf7fYip26nEJUjk3fgvrQMTh783Xzihr8ajLKQ6EnMuV82kHRcsuSz9JbdHx3c",
  "key1": "4fLYWPeMw2xg8Gesfii5c7owVsCSGtyLmMnUL1MTH3UTyNWKxwNtsK46gwBNQXqj2HGVk5mesb9ji9M2xnm5XbKB",
  "key2": "61xQqy4nHobA2xYZ62xfH2r31rsr2vmvU3k7bdqetXgZeprJDwoJBP5RbSsEBr7mpXYyLQpRbVST9iY6yifkjhvG",
  "key3": "3CUKzUj73UvTTrfA7nGUVbxEBJRBNmMFwVTJ9iwjc2utCTen8JEd93c7v6X28BmNfheRYtmEUsudf3VcPBQtFj4e",
  "key4": "39RwDgBtFU8RuuZHtsyCkh7ZxBcaAEzYHyjQWCHVFY7kxR7grSxAFddni1AmqAvXhtWECnwvhe8xhuD8J45vwRVk",
  "key5": "399jCZK31eMshKjv3yrH1abEMwVzWthZdMS8vxFEUCR7jGgtEwGgJx5mSAJiaUH7wYQf9HtRf8HzJQAUffZJqxHx",
  "key6": "57QHSk8N3xV98TFjLW9L8NcoHeBwTnpcUiVm1ELWQFTVGJ1qEVyke1oD6HfpNecUt2cMMvsz75hpnbtd22xKmj88",
  "key7": "rZX4v3Qfsm7xEwWvWwKojN4oDovyXMTE5u3SJNDmJCd9XLqXz6ogKTepWjjP2N8nzkSzYzND1v9tDEurc59fXMM",
  "key8": "48uxpdmeRRmP4AuJYfKr6q9FHD8bH34yVKoJ7DWVCUeerWZHLDji6AoReHCDqZS38jaVxnrJorgqyuWG6Xu4fEV8",
  "key9": "2KgW7NGTwJkcgiDeYyDmg58wVU8S1tsuUszoEfzvCBu7Ay7qR6EerXs9g3upG6zejKPMADKE5PSj1JnkcGdEU4ef",
  "key10": "2yJGr8QgsJ72PWgSdpf1o6JSVynmnFHApho8w74K9xdmfVZFJQCAWXQNxJSkoY1fhbVRewSxkdmcuGtMudheiJv3",
  "key11": "Z7hcLj1XHWDoiuVS8rnDEQAnMgNcGvLFxPwmaSRRduQLZ3RLtyCq2EeR54WESAd6BDhPgdBfYxwnhepJs7bPiwZ",
  "key12": "EvyCkAMvbJiW6ZomxC31vaL8fvVnJzAmp9CcfjWhdbfjr1rRsrZ3VrNB5nGFEP6aEEHYfnpMso4mqK8S8mXrk1b",
  "key13": "nokVzdC8TvM9i6ZbomawsusKXyRYqPyDgiwPhBbMrMTJvPGRdTFsUK9JKL8YhrRF6EfyeZAKiU3rRiPBGK8oCJe",
  "key14": "4hncaY1a7jSAc4pjbY7PRHM6p33GQ9AZBXvXQuNqF6Sn1C5yKwyeXehZPM7c183dFHBofnzj1Y8qsw2TtaYJK5Ui",
  "key15": "SwRXLtfEa5rS1G2rGEP8PmtMwP9yDuMeCGwpQmgLdTKfCaqWCyqoLiFYVNRY13MQRmCBny9mD9FVB5Gch4LB9Qf",
  "key16": "3F4D7MKEWYmMzbfVbtunZA5Wu3kp4otDd1dkthyDHyWsyrD8sYjKkUaSuDxMMmycVApApMYKe3sR5DfGuHeXzhni",
  "key17": "5YHAarj2GPtzbMQT6Xp1ZidPQMogxUr8r2otn2o6JCkZdjezAELnkTWzxXra9KFZTLpzjhrpUP6H1NswLYe26MXP",
  "key18": "3ecxVpfwEMLGbeDtK9NMK4dayMA3xQVSz7K6NYvgwLAYZXEB3CrnjHimB3PebCiQDkSDM7sXKSK9ojaQ79dkiLrX",
  "key19": "3529RsB4JFzBFfCNiefDJ4yMsMvKmn84pGKtc5tQGPj461pTVkHmFawSUA3qHdgbX26abiMeSeqViwV8StxYHEYg",
  "key20": "2KFX66PDyBozPfs47s93isJZLP7PZXbjAhBvQuhBTb9wf53WoVXCERf2CESfa1oqSH1YdZwdW9cRkKpacGvHtSPE",
  "key21": "4JZLE77Np6aLhRfoykE1Z4ZePTtFx1S9eBzybB6N4cz3x75LH6rsaWdfaWvEAfYLGDR9f6RMPkLr85SscaEnrzLk",
  "key22": "4KAgguxdQrUuAA4Zdt9fwBJsaxfWRpiwwyTYuZG9qiT46U6ABmJP7YgDHxQBNyVtcvz9rSgWbVz5avfe3TZpBcep",
  "key23": "oVRzmwhbt8ongkPrRb8feXgszN3v97PAyAESxt5ra7FknsHxcgg1sVk6QWcEfQzV62Hu4svzAHiPAL7ANTcQ9BX",
  "key24": "5nWWAXRsVswVubDtBXTFNoHniCmvFbrmdM5aqxDvy7ZvuhSbXYXhGs72GEGDhcu5hcQpbxXHESoKHVNmbzPzNzQ5",
  "key25": "64rTBT6iYnzdbGa3rQzAXTYmiyBy1AjMLGi4e58GbX7u1nhQxNPc9AsquqXMPQKaSSHmBQZTh5yRVmyZyEnXnCcs",
  "key26": "5PdJh863fD3XHTP3LGtnfRhVKHHUTnrhVVxVPVmakJRfjAH3mfc7h7fVfqt9S6KbBBfdtrW9sBtPpMxDpr6RY2bL",
  "key27": "2rJ3vTLugRRxB1c6n6yHef9u6g7nwWfTPNwYa2qYSjS1NFaw82Fp96C2PHvWeWY111p3ZRL4BzC4W4dAp3tCjbEd",
  "key28": "3J4D4Liu1SZkDX4xRm7LmcmuoPvyFs7Fpb3aJz1pPFF3qEUw7knHPZwxH4ioAX8AKK5vawrbYqTDXBstdJr5tHso",
  "key29": "4zC9zdSYEjY3a59o9yBbqs8YnnYCZJeU9DW3Kqb4Z3WVqNr3PqyagJdsNsMtqFfQfyPRsmAihGQ7ZsAFrAF7B6wY",
  "key30": "2TQaHJ33P8LD5dhWSFyf1ymsh5jKuTneKtbp8mTwof6wLpoMfmm69p2fLKiuiLePgwKYot9uHZjLoWq8KtzpYFD3",
  "key31": "5QR6fNMM2QyGi5J9o5ErePjnCK5hKXUMFfJbx4mL1j1uLbdV3QukKiKJ13HAVgaHuwA3ZmsAybpujXoZZzqTQxHJ",
  "key32": "32jQicnPbBsdfnjFmLG1p1zL4p6RMoX2orBCTmLvFyGYxEjbv4jY52mwvn7gVMsYZrkzhu17DGP5kPnRhYu84dDL",
  "key33": "455FVHdmg6ha7TGvSa2dLfYikhd6cPnwBi6NYFfKATXGQxRDTwQ2xKVHtxzagmTXWTfe6wJRX4LUGEAWJyXyG416",
  "key34": "2jJk6Jb8wPRwm2Pz3Q4DMba9VrvsUSwoRzeVP4wTbfP4DuNsY4Ech1A1gRhyXqNZcgvMGf3FuPYf7XfQQyRSij2f",
  "key35": "tVDKWQxtrq8aYYzmM9JiNhzt5fYBhXViUHXbk1o9SidvX2Xv7v3w9XSzy4KY9xfV9qSA76byr2Dbda9C9YCGbdJ",
  "key36": "2vJtAJdHM84P7DNMf5KbrjGKHbCRJxyXSfdNiiME4Xo4g8DW5j3hmheb1pnn3fE4LDqRLb1TdcArVtghFKS7fU1e"
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
