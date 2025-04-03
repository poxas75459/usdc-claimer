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
    "4khvLXGyUPKLY9LGpScpCwWCJ94vSyEoY2LH73AxjhtDmQZB1bnGtLaCsG2qZ1S9iCLPQro3SwvAarj5F5ipa9eD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CArGxsnxrS6UhA1ZyheF7uFbyLERVbJS6o1v9R9Vm8gn2fS1bSoKubKz1iwLZ8vAytvmmLzyQnrfswLD4RcWKnu",
  "key1": "2JbMMVKYRpfaestgLW1AyhjSXPnyK2Et6daJyzaYpawYaFzxjdoYvgcoH25trDHvxRxLnfZPjBbCUPzpbTB5mQqv",
  "key2": "2x95uUt57jPCMREwphZSRQJR7PCg7ryUxJeL55UCnyhgGyTGRUwaT5VL9nTo9dsdZdMd2BXsKCLWkmGiyhroqX8m",
  "key3": "4EC9k2TGkwh1A8TjtaLH8mG13hA46hqW1Q3qSFmYeLV5ZcAuBjJ647U7xeSWeJgnDVtXJgepSm3oTRaqur7z55Jt",
  "key4": "4TtZwPRPhiJ1SELixwwHHaG7wXVobFNTBpZnHULGMs6YCojQ5NkXcuwCP9t9GesAMwQT1kQt1t9CCzVvHBiYTJpj",
  "key5": "4vjXEFdk1PFY2stayjviRSJEDtW4kjBiT5KgQzSfpdj4ox6YUD44kgHx34keib8w9otyYtqL3rYmhoBXiSdHYt9R",
  "key6": "4b8yr4MYngHPBqN3oeTSzquHp95yYcjoSaYX3E8po3RA2Vfv13cSEac1maRpDDEEi9PcKAQnhtxMB6KpvbPDWNkC",
  "key7": "5h68zQV2dyErXR6uJ6E2fnUoULDi5fWcCf8tmdHbjjHPDGfKTdwYgDHENCoHKXyXAGrtCnKhBWgxMLmxRttjRj1z",
  "key8": "3SDQQmpidabTdwveQFJMsHZR4mZujkyN1puNJabBbzXjvv7AxtAkwN7B8LqSqruNBWK9uexvi6X3RKETpLkFJxd4",
  "key9": "4NPdFUK8KMjbQatTMHoodGQKcX6wjfKSShc3oYCdZtcNUfoTT6ZRqEm4YLhLasNxJC7bUmqkckBbG7ho9h7mVYcM",
  "key10": "3h4wZecXVd734DTUqxzq3LuAw2gBE1Jm4baHToyhF9BSjK1Un3erKAwSsDnMWt2xxYCxXK5krbM7HiQNxZBgm7DF",
  "key11": "CtUU68tRtyKf9EYjZiUXvRcnAVUvPbF6xjJLTLACuMeadFux942ktwjv5wZcveoXn9rawJGARmotH5ws1Mp8B3U",
  "key12": "4opfyFLC7phb1QNSt2DB1UWLB9JyPMj7msy4RuntFhSN7euWHUtnQdZddjuwrg9ZwBuVXJPNQyrmdC8Jgg9vDApR",
  "key13": "22AtTZZf8UeYcnWwqHGbarmmX9dBq6efzgsUNN7xPNr515zsBJ2tsZtJ5eGcXg53EChZBpcnDvp6qCC2qvUv8bSX",
  "key14": "3Lga4Upjr44DjaFoe3oyozK4gDH13yrA4senKfnU5cSTRcoEgaVJyhYQbbdS4xmRaCnd4YEaqGgkNDdTBQZQ4JqA",
  "key15": "7p81jyiLcMsbvXU26R2fndmskBfUoFjhPLbKw73SwZSc2TiKN3q3KqD6PvLrw4Zy1YzDeAhPN77SLCNbSiGiH1a",
  "key16": "2YpSjGNEC8UaeTWdywtnntVogAPLpcDiS449VEFpP8RNE56yTCyzXG7R8ebssRkmW4ZfuJ9dgQvok7rciqktRuNL",
  "key17": "5md4bcCshL41RmDPpx7BQHZrSeQ3KoGZjqeAk4y7pQcc3XHGYR1psBHU5dgRMMeGAtrrhVCrnbyH2Qy6Jga2vhT5",
  "key18": "5x2ARyMKz57ikxAJ1smwWVGJoJtkviHjeJUCyA7AKNTBP6bU3o2PnHS7S3PgHgePosRPVFmrcQzNsqCwLB1PBfjX",
  "key19": "5QYnP5YpfRVE3AMPdjeqr8Ub8v6LAYGUEAYBy4Ln2JzHXhnHNHxJMVgsXsB3q5KBake8sAfFBbcbkhk7DD3pfM2j",
  "key20": "2jATpbMzx2AY7Cy11JD6dGDhMxqiSrsAtPCFRPbJ44fRqT6caUWuBkjX7KzWzJKyxjtJXNPvcfR9dxFjMYe6BFQT",
  "key21": "5HNvkFiYp9vGMkcuyrkc3vingjZbFtFpD5H5KUdQSswaUyqThNPEtK6sgzYXy77eXY35uqxiCKHAg2txcaET1iVc",
  "key22": "2aCkSeZ4TXoQN1K35CyiPTMD1oWBtMVYTG6me8y5mGMa2P2F7HXMkJRjvUqWRRwk9bGAyoFmrbgBywKvLbshm4F8",
  "key23": "5Smg42eH1XJXoL3sQ1bHjgbEtFYZByNgAacMTnHL3R3AMZquwtB4TFYA1faiSaJxpxzmyoDgdvqSciGnCLpMtccT",
  "key24": "5kgozTVp5SkRKnXZqekqB1dJWPpk34Rcz1mLTivwkZ4wB9sXz9c3wfUQbSHT3R15QFHRLdYad4sFghZbz4MJCcJf",
  "key25": "BNyDyxQzqbsBHfFDDkHuHJPQesFkZ1fU1CRqsi4ScSUyBcBM49yq7wixWBGFSj8KLw7tTpYqGJrDCKnjhRXdHNx",
  "key26": "5EeLVMPHQcxbUVyjSt87VGkpTafziYR9uvfuKNuDTWcUzsc6ZVUQhXeCKrov7MdDDKchAqBvaBHSWPg1181rZXGq",
  "key27": "91cdL9H5Ru1m5sZGoc1MXmTVXEn6T7rzTNBSXJPvoaf6mnhnDJth6Tzo33jinBaV3j8KhADgz33jDxe7WgtZfBJ",
  "key28": "5VCym1VcaGKHjS3zfGWHPX9GHTobWAUpqR6SQMpAXA9Dzzfepw6MkrUYezgeMDaF4WZP5cVsbYKLSeJS8n5KmBSR",
  "key29": "2afYC8KDWfDEBFMUVeLa3FQF5EebLYtdomPU1vhzd2TkCeK2CAqsyNQEpe8tBggxjMqQ5chdppgxNPUnGvYEUBLt",
  "key30": "2oC7xEzdmSVfyGhQq1fLyFj652UK7NnZTzCuy19vbQcHoWom3BrWDRvpHNeshkhUAPGbC6atb7Rti9TMAXTS9UvH",
  "key31": "3TBncG1iaxw3HHxCJuvsX3vXsFGo9Zd1LAjwcu1qzjmrB6SRJvruYPLR6iHXthxATHME2wPz34aGGcGVsPavKQg5",
  "key32": "2uC6tjyfvufUhxJozZucZGkHSXqSkLNXxyuJAnEdMi59JwMAN4ztkKuikt4dC55P5KXQnzs3a2kmXQvmFaDzjRmD",
  "key33": "3MYqKB2QftaX9v87b1dRMYg34dBb1jzyc3VQszTJEoMTetd3QUPDxNrnJVpwb7mTesWGfgvyAoqeZY4oHE3fVEH1",
  "key34": "37JprtVANwd7EP6dmWYagSs2sc5VpDJqDrgHgRfvZM5kTsLN69RvWmtQxtnq2NkmyVDxtturXbP3f1DvQeYuaY3f",
  "key35": "2H133jv6qo5YfRegeauyL2SoXfpsu1JjMZqoxYduwyuu21NsaeikqDTTBAAjaSCXdBXy31XewUaqru78QtJDPLzg",
  "key36": "189dp3LaB8CGaCBLPQ1XxAnySfEG19hpSh46MDseZcjzLDRH9t5TS6U1NuosdBnHGZti36cRjt4Y3ueAgrfPxvZ"
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
