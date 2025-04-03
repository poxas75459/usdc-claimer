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
    "Kc69iTzo96uj2PRdzckM1kySRxnYFnm2STioKoXtAnZma1iofnV2P685euwv9LYVv2WxHJfxbc8C9tieGk9ueao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZB4yn9crAKGNWsP3Y1hMxX7fcRfQgAETsPQvxURnKbrmYYLVfGZGsutGFRp24mYAC3uMj38pGoggFVbwm3qFQxj",
  "key1": "3cF2niYZSHiVD7Z7hTQZdXTkdqUWHBzbHtq5JHfJRcVZEMABceWbvmjEXscd2hvWPHmiffpxkWrFCxC14obD6Mny",
  "key2": "4cgVcktcQjQYAhX5SKZ1ssy36HLXPRojPbnnf86sSvAPeAksE7fFLJG5oW7Sfp6bRAAY2yAgosWmkLz4c7X63Kjy",
  "key3": "2gn1UVtkmhHqjhT1Y5iysQFZEBgABdFHYfEz87K6iza9XgrzgEXDQxwouxFq5mZdtssgEufpfMYMx8wnn9GM4Zn1",
  "key4": "5ctBVNdvtEM3WSpGzvy8y9j6Etd9FC3EmEfndTkzwsEw7rYBq87Wx62AFmVPC3jc3U5xFS55hY3LCUGdS2Q5jcLP",
  "key5": "5cyE6LUgLQwRjPjN3v2Lz2s57kh9kbcnWNNBSr2raeFjEuv2gQyUKKp6K8brLZZtXUnPCovCzLDtqvwhWnkoNKwN",
  "key6": "26aBnCopihjGnkHTkoWLTQ9Xz3QP2KgwP41ArC3NbRjNMR4gNVGYxdPkjEKzAUJFBaNWJWucHGEWT7SahPkm459r",
  "key7": "4v1E7qVUN5qwWzFZ51FvxyHwuP79d89hhUZn5iNxanMRvFyReMEDEWuGuQdPApFaq9rcfdLzKm9cb7Cic8Gy5HrF",
  "key8": "3uk4pDTknMkF8bfyXq27mx7nzJNJoCiejtdnwtZ4ThC2spDMtv4QTDqyGvexu845Y46WFSpHgTPQ8C7pnXP7fzhd",
  "key9": "R7cfhaUwpjnWVbKg5cnzaeX2Nik1yAcVK9jNvTR3aKGcveusLzC79xo4R2W8iugyS54coJTL1pFt4kgxATFhXGP",
  "key10": "S6Z31JuVZcRz7LHb2PaRfG9Vyw3Pgpd2VVJwJLRcCDCkeVPzppXqjjbjEmYzNzqjkttCTeRWLK9SWN5EViVGun7",
  "key11": "3SR3VvS1B7Y9kgeq2r58ycLugcJrEa2QPZanezmFN2sN5D9qMUrym7hNBDLwTFtCbngUZTzvBJRzhQWrMckdEXjE",
  "key12": "65oiVmParh4iFk5QJzNHFiUri1xM8BscGUWo5Swjbq1gGm6s2z7k1Wt9rKCW6DXDv4R9QYp1D2zkGjwPxY6ngHZs",
  "key13": "iZZWfdP2cmMukVLcmxXF7VMss8rXH82kq6zqdC4i8dn7e4Znp3LBMtNxp6hqwDpQWC3rb5Fa72EtD2YMkmTMfwR",
  "key14": "2B43iNFftBtuhjYyN9aivxgqCxxPRdRbQ8UrNkLEnAu2wBSPeaw4e67ho5HyUDXdSB7xHSV2ND51u56VvAyXeF7N",
  "key15": "xBMQsibkRFGpbKr6uqttG42iMW6yPSugJc3JeCoBuLsx2vfMVbcqLGdx8PXqnskRHANDwoecA2Cvg3p2B8xT8qH",
  "key16": "5qTfo1nwGXMRdcVQKWU9iBTaYisukMMJcM2y5Ri3Z7zg4mazMuzE3GGHjhd9EFHtLgFB1rr8qrV1LnLPyMKmrv48",
  "key17": "267DX6PpzcfXSk4B3ioHoUJ2eQ8xkcgbqoba6XMTYfHjK48M4rvmcYLj3f5Xv7Kzpa6qstokhTKsWgGj5sHD8VLH",
  "key18": "5Bhb1gscvdNm6XEzycUy8Cid4yeMFZV8u9TLN3Eqq5ZZgXt7TKZcKZVNaPKNz6CsdcF5jUEa8irVnXRXyosVU2Ds",
  "key19": "61AMmSoUFbVfL2zgEq6gukiqvswZkj6ktjKpbaXroY4jzqKkQ6Jn1nvw5LqztqfLhrjabEbxrRUkKg9QtiAUvzUc",
  "key20": "4BLvHKwC6kNXfBcrTnq63DKmw6AJBqs3g1HYbVqzo53HuEhhryRhXuzDSQuhaWSBvgnTSksFnG59zjF5gYpnZZ8T",
  "key21": "2uUxMpUftewQcPUo4FqTxtYRprwersFafs1x44cbM7dWY7ULKTmkW96FQixxj5etiJhEd137hbcECSf55TdQokN1",
  "key22": "3VMt1fbVPHuEsCS21vhj8czHPs1ZLW5px4gfRVr4GRhFvK7YJtYCyJuYufCY24D6ZdeHXLuoGQXrjiFSLrYds14b",
  "key23": "4qQ5NpuFp8tcN9khbPKCFU4HpNpSNwGPBwv4uJQ2LZbCk5WAZDUmPQ1JYQwBYvhKyBnrEf5bSjU2VEePMMgsfWJD",
  "key24": "2zgT9PM4c4Mhhjk3rHp7TXTy5DpV2b5aH4EQXb9CpegCwZ7s447tdAca6YFhf74fZtKSTJdxuwUDUHYn5RdJj5US",
  "key25": "3YeTPuWXiKnKv3uRiwoFpp9yKMccbgxze93TB4981u9H2ADbEwmVcSc2ekXdaTXy997uiUha3cDwhZ3nuHHZENSF",
  "key26": "5jbWJLqyUZCWre78dfgyM57q6MWz9SiE9BBG5zJ3poSMuuXhckkfEqQvS5i4gro1p8P8vrwn9LZ3o12UHZN6D9R4",
  "key27": "52apx3X4EXmf6wbKDMBXKfdXUbgp23VyXVoYgqG4tzL163t8W94GQqkt3MiEWPozqsAaYUTF4ZsbHVaxx6f5xwmB",
  "key28": "59mzNzVframSU8TPeL4vr75dEHE7HBA2KQRRz4kCbMqGKTkKfU5yCEM3MYxC4hU45UDxyN5fvE3Lho54i7FS2AGS",
  "key29": "3TYbmwnSEdep8SV6Kqe6UQ8pFW5zU5ax1gXgA5Cy9QN6gY7ZMqBWpMpLpFuY5DSKXyk2Et23xWtbsAvF8ecN2JGC",
  "key30": "2Jp8ip36oxxKagcTVTTaFDvSsNNr4XMpWe2LVN82Hf5SG76YAup89pAMZQr6pkHDw9RxHWxmaWAn8fEKNugB7yBm",
  "key31": "3EHWZBtEJZWiPNHSVrntc2eVisL7DaRFnU2dEvRPztwdwDwaASQHXkAzStLggndW54jwRt9jLZcVYUFpGxCGZiZM",
  "key32": "2Q7tc3zSvvj2qwPxstnJ5e9RqMKvk7Z5hyARynSyouCKAH3pXGcfwVc5BgfQfSkXugXw3hRBRhPimEwoAYfVPjRp",
  "key33": "4yYF2Mc7TKoiWPv7DFJEhzUowoaAyPvK3ZRDyr32LfDL5aTT8oTxkXtGVwcWy4YZdsffjWbRsTcNcSWJepNdxVFW"
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
