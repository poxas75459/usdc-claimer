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
    "4HGWXyHhPKySZbAuojFcJFbs9es4Sg71TuBPTy2fDmvkqWpy3NPjnXPZxv8R2gXxBA8gbB8T8WsbZmvbNYCPFnsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACfViFVDkXTZjGR3aBmvwPtvMq8ies7qZVZetQZKwy6vUDHiom1izUbvZra53H19AitMaHN1yHbncMjysFR9Kqz",
  "key1": "pqninzvUqvgYkAhG8qQ896w8mczo5x67F86ZFtmJn39dFxxPr3mrsvP73hvPmoX9b4mwXooAZFQdUgbLM7AfDWk",
  "key2": "4fyNtC3zHDsAsaCEAi8LxzydDeM125uDQ1HCrkErXQ6ncKrunfqP4aqtNF3g6MmoHcQUHFPKz8jSXCB6MH8AmC5J",
  "key3": "w6VLP8Pdv2WeAaboRy9FQ1fJhcsVpLFt55MTwpcVGKQP3hrEa4adWyQ3Un5HtZeXFzKADDe6QJwgCUsqGAzJJ9T",
  "key4": "5dcpxk5JPGyLHfddAFavA99v4DSKvYskos9cE2pdjxrw6qabs4scfCyijp6A5rSy2nr1zuWwT9BSMAKGB7MSMnMU",
  "key5": "3MH8wZrxCBp3RZ25mvKVsXhN9DQPE8m9dTehajNSPdyDqAjB4ABTgW1GCS6tu9tf3AGKiPmQSFwVDt5qmPuT5vD7",
  "key6": "5L6miSRcL6VE5kXUf96ELZYZaVymsXmAzaVLJvZ9PWxT8n8Ko4ydvaTwGPEpm1ELxGEDdnKKyQtWQP4mtbMswKAg",
  "key7": "9VBZPGKG6RvZFKJ33L6soiWCQD1VPjHvHBjHtixQxoqFWfrzzKn9z6FTa4kpWwQyNEb8xwxK8vUyMdgLmZgbzzG",
  "key8": "43ScfrgCtTdyTnTVkqcxeYhct68n7ZZuH7thPVj1tHLNmjcZTpnCo8KvUsqCpTtXs1DLhnDVBikcSnDEabD8ZfuR",
  "key9": "3EVS5TAr8FRZfnrCj3Z1unvGxxAYoXDHUn19FtDUqSstXCuDS4ui1cPjMd7qu6X5MhGEHiBPtwYjLLuHb5S3zqaR",
  "key10": "4BHWCkENkYqC4TPrE1XMCBvUwakERHZqjKEYq27vGdeY4fH9YACpJ2ZS6aggz6oRoZsPgKg6Lx7SshPHNkYPyBXS",
  "key11": "pSCvcjPy7npCVqmg5xTnxh5MHopR4m1iJi7sprEfcVS6ygWtm6C4r2achX2G4rmoVejkfy5B1U8DGVcZASrduqw",
  "key12": "5dPZgZtuBchQmBaU9RWr52qs8i6sKmXvpWP86fUqFV8bNUtnzurB1Wx12cZSNKAkDefmgsFtzFmH5XdFeNGxJ2dE",
  "key13": "3oS2z6i6ukg3KauGuN9pdmauLFF3TKAs26EUNobTr6mjh7QPYKZUjcSfuj96yRJznP8uArhxXDDd8g6CChvN2pcT",
  "key14": "4zjzVxd5pRXXo412EKjZJ8Q4St4cpSWS9psxFsGmA2Nxgn4yAj84HVE38yCpTFv2NHq2VhSL5fTiPUQCg9eRHNX3",
  "key15": "3hkzFhZSTCmeH8uRk3X7xWcfhU9MFnSrRyVbPhNrvw2uoDAKiVX7bQmxxRsT7MQWztShH651SnPEqb3Ug8CCCix7",
  "key16": "3NNeFwELh35nNEX2TdTnbHs6pHAkbAdrZC3a2cp6VFgHEdT7UG9ZJurevKduaXKfdDSzbqMcg3YGsuLQ6bBcLZGB",
  "key17": "2Tddyox9sjxNxLNYsj9CfyoH7tjNQt6SyuizACDjcYYWBaQKBhL4RYQQwEF53xRmWaJmQeHaCuzxF1hjexvMPdDM",
  "key18": "5su5A32kHkvGMvZAJtj5LJtyB2KPau5NFZQWaLwzBUT1NhHXJTraWyVDdXr8beZ9NW7FchU8QVrNevu9HMte7uVq",
  "key19": "351nHRQCYoUnKkt7ZhFZ1r6VbNFvLxSHNNJiHet3wKFfPH1bvSVS6ofDuTLYvh55aoHjsSyan2FbwgiuYuw7QpnC",
  "key20": "3zRuBjs2kmdwZAi39xyzJfRGQtekz8SpXrAUP9x66UqkRP1r5aDPkGT9SyijKLjxvxSgvQcLA1mQqAXiYcyaYsbU",
  "key21": "1zAKxG9SFKwRaEsayhMP8z3GuSLekL7Q4qgSN5RkyRsAm7b6Ei4EsYp7mFeFqssshToK9G3EiWSfwcxJJKo532y",
  "key22": "49UEFXU7vZboYpmZeH8Gu1M6QLAnMNL3sZoGUA7kk5fa776WE5eJmcpS7VrUjhWeNvxVPAgSxUj1XkqiL3VUWBZ2",
  "key23": "1pQM5y21xcfSQMfDGJXpRnVfBQEYBnvkBdKxFxGkaBAAH46FZqGT2ifSu5as9R6xpzPdHWP54K3U3zPHeH47bEW",
  "key24": "tTAfHEXZdznRfUtHVdgLUbxy7z2YdYd42576DP74HTBBkZhh3N9pjQ1agMPNt9SA8EJ3ByJFoojeWmCMMeyZaJf"
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
