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
    "RD2dZ8z363QZcV4E13UpCF4RbQx4Uv4t9BwsujjEnSsDDfqL4GkUG4dJHmrXx9RHFzHomidCi1uVtDNcu9T9TpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57iiH7PkkwHPG3aDMfoTWHUjxGMC3XUGmRVgtkkasqXeqZyW2HbyKWS4fp9Y2v1Yn7zcSiEHVn7cxacyNTX7vRgf",
  "key1": "2Y27rGM8auXSSmJ64jYs2jNgWZjGvEg5uBUoD2LDTaAKmg9H3Wypvqungvz7mcYPYAuGdXSNW9xq4HjCthJN6Gzt",
  "key2": "2gEvoohY1wMoAW6HtRM7jzdYMC6R6VBLyYN6wcSbQ1jBrhbkiC4bze5ry6PstrCahuf5FFNmBinH5WJ4ZPLX4WNt",
  "key3": "4CnB3tFcz2d1ii5kkFj1hToGABM7sPmS2YhLmfxx4zMWZkuqrG9kynaNoJramM88NQSgH3Y74XEQUBa86AsHfvmA",
  "key4": "3JAu8EUHicUUhdESQHgfZAGPzDVm2aUKpidx7duSaDMZbT1VvHssMoNJzDzct1vBGRPFwqXGFpxgzMUN6FKSe7wq",
  "key5": "4y6SMBcPbAVyqSP7UrmpiP59k11BiB9sRRUxkyayHXS1bcg5zY1rgZV3mFQoKXQN1WVmd74djcdxeAd3eCjBRSuB",
  "key6": "2mEJhU6w9yJex1CV1B5BM9N4Zdjgcne6cVkf7WmmiugHkAuzrWDxC8i1sRvsn39iRGqojCrRx6p7R5s67Mx4jAjc",
  "key7": "2t1wn2o28VuKp5CLhwUe2AkY6gv16zz29FQbZMzULv7qQuDvFCnhg3EVAY1bZyGEXaqgFoat7yw5xDRTqT1zU6rL",
  "key8": "2YmAsM7DkV1c2SMH423x27TwRhjwMuaGAxmL7f8N65qjye2nRULjbBLf7NRbLNb9gXohEPEwNhnkNZwJoCHUa5mQ",
  "key9": "2meEy7n8biVksKHU4G2CVVvP6xh8otFi1PYMk1ZU52D1ZBCNkzX4VusT94baS7D8AT8EiDkKGDh4dVaqXpuFawv9",
  "key10": "VNQzzWAru5WxAp7QWEYYU811h8HyCmX3PVfhmxQ3HraVQgUZ5EuRT9SEsismTfLezr4RwVmEuXoWdx2Fp5erh3Z",
  "key11": "5i3CzN9mZ6FmSazUd7prmdMPj5z6V8cqW5dBDGLfhHaxcqJR27FPJ7riLeSoZPGAKmnoGrNCdcJvW8bZrbB2WAHK",
  "key12": "VKCCdvzZPeEbtnQK5oZ5NwdPpzrwQVwQpvAryWLCnuYrJNEn4aYC2EmT88LUoRxRErSWTDRQdHqWsp2UvTih96r",
  "key13": "2GbXkzc8ox5XMFx1GKXWK76Mg2hGdVCCEZUypXbEsu6Bz9i7oHT5nK3iLpGzs44Wh9s2WQm9ctpY5dQT7bWTcyh5",
  "key14": "wPfVTQCNKsgmz5zkKtfzKZaUbWQJckTv68yT6snqorA2rjyMYuSfy9rjBnbo4WtGFf3j55NvuTFtv2pcZd276Kb",
  "key15": "2cbF44tfEmqpVFHmoAW8oL6ZbkrxTfqGERyPjnY9vR4pjcYFCYReX4n4dC9q3GKzqAR9BijZJH89KbLn2ZZUeYSb",
  "key16": "3ucH2onu5Rh54tnHJfH2HjhQb1TJnQvw7a77qpzihT8vNWWFDLzEevNHYgeU2PkGKUWwWvqb5xef4z6WLD6s675M",
  "key17": "SbaWCPmmNWpgZeKdyqWAQfNU2uBpa6cmNmw4Vr2ni6Js4BtG12vFSu6HuHPsKBwfaWcdrznbq4x11R5HD29hwkJ",
  "key18": "B5Ni8AWb4KEyNs5ojwqegHN1sxM2SjD3PhbuenPFD7MU9aXnP9GcaJFAi7XjQGwuraUhZP7Y1YweEa3DhjwT82e",
  "key19": "4ashEP6gtHKW1JpiNMXk7snTs8ER4WADKsPNkFK7tc3BW6ta6Z2RMMh9Dg7ME7o7cK2iNXZzSotEyFdv4kjdeHGL",
  "key20": "4SbbL5qMvkQ5LsGDZnYaqyi3t6RjDDoXwCLBZYKRxNfpx9uZ96VYCMiG65yToQq3iw1z1awjRYJeq4hfnDRzbrWn",
  "key21": "58pcvXKQ2QeiochPDeARqSS8hfHZre5yN9kGfaqfUPi8P1WHz5gGNvz7FhxMyVXYiFxQ9ywMczsSkksJunj248uj",
  "key22": "217Tq3SZQzkEg4kAqGtEv7ESBv5C47MwhbgJzwfFdAHw678yU4HSDMrqeeRfd7a31BPZxFSfebjcyBjcpbdeYELn",
  "key23": "3mMNdMKNzzL2Hb9MAH6erCiMVWdaBxhgPAZmefef7FSSrRpf7hA5RhaeEY61a72jys2Yfy194eG7B8CeuuK9M7NX",
  "key24": "4J6prhb21gXw526ri2WaNahuRZmhZgXxtMMUodTLAbDfr1ZZYcsAgRXA1XvEJpzXKAbq5H12DpJfBF1ehCqADBA3",
  "key25": "588LwUcBeXo1J39xvVrLvgYBREfgqn5oNtWNFC155CoztuY55cVSJ28yzVrvCv9t1qWydjXpUb6kBf58XxsJyZtV",
  "key26": "4hTYtN4WrVpMfyWVBsRyfYXUemwuWKJVFGovWNkYDLTdCunzhj3bGT1m6VAxosXragTVHUmhwV1356Kac8bYJoCJ"
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
