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
    "1gdFy5zFb8sfTMnH1GT4WesCydoXe1bLMS3J1hiC1BBdx94vsipzXBuL2xdRUzQ9NHzPhKLkrUR3vRWucvBeZxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2PsiXtBDXJKgfRVG1NmYJaqQJvBdpPqeMbBmsFXSWZU4Yu7PvPJP2bLtcX6LUARkZTwWGQeWyVJwZf5YezDbKU",
  "key1": "5wVRdgmA2zGGRXoFScTKGRaKvj4f3z1sDPcvx6ckVcjtBQuBsdqJ6tDseXbjk8tARx3Nx5Up9E37i3FkPtn171XH",
  "key2": "b986XTmV2fBt2NCq74b4jUoeYLJMA6D6PBoPvNUn7iyqoVF49QRZ1S925TJjAzyeu8cLSheUzRSCG87avP4eMt1",
  "key3": "54DHhLBYbdXTuNvq3dm61czMdjgAz5EsnfC73H2QiY38QstgNzFH4XgsNozwyufcAi7cG1WTeBkCs3KPsNZqBYr3",
  "key4": "613k7NLypm8hJDPZSXiHJQcZFkdU2ofvfmSA8TYqXoDefKCfocxYDx5KvbM6immzymcXi96rXXECPzU6aGrEpndE",
  "key5": "3KbN6Nu1cLq6ocxre4AgqKvBCZrnxneH6iZVdDjQsAR19KMgxNEQLakpfJB9gpdCxyqarWBib6NzkF7K8W37Hd5Y",
  "key6": "2ZLM1Rba4pzykeZBYZTjA3BCDuiU5VSVGea5FRF74QzWoiPSEFhBDohKxHR5GaUcbNQC3Ubbf9Y7zQKiCr9QY66y",
  "key7": "4p3TGLG6AE57HD8bCsSVF5VpuxzNFaRz8inu7KCdLiUp4XY9tkNXqErGSdYizUgKuadWXLw4PiLjEmB1cJiTM2vr",
  "key8": "31jXpYYkYwiQNcigjFK1o8kgNLuNcrxbzUqS23RjMLEBw6rmr6yCD5dWfBEvibpn2NAP5JxkFHnYXdvmBx2urGiG",
  "key9": "3DA77ULRjrnQtbFpnXngg4GMSJyLkPFxkpT64XsvngMpbzoGgrVgA1mQfEGEHFjmrBfvdwAmwmFtTvvLFtGGcaLF",
  "key10": "5VBcaANz5KgLezAKp14zJX6JXTzjtaYrrQUvcGnZdTcrmZmsURNrxDd8MSNGNfJHR8FaJrvtckxRvj3fbZwZEFC6",
  "key11": "5gxsmmefYAs2iESKsC5LwYmH7XnNb3LRYodQGhmoHiXhTxT1vt7Xudem11SDCRaRxsHLcQXkdPLZrdKJQ5vKLyLg",
  "key12": "4ueor92DEhny1PiUdFjkgfn4GAsejTpiJwNtawNMFfUguqWekehRgS7v9do93FhbKTv1mnDzAUQUUeh4zgkuj7Pk",
  "key13": "3oagePz5T3hUrukZL6cD6CqghfmPznCwfmEswYyHWb1SNW9RgiJZxtA4Pj2icfRGKPWC9oxsUxwpaR6NLwwCzA4D",
  "key14": "56QxxBkS6oCXGVpHvAAXK66u7bsT8MKzHFKazt6tC34BwbreqXU5R1tPygvfYKphACDmteieGsM6njm6ssYJSrRn",
  "key15": "wAPv9RARvz6XrjzenigcV6GebpqqFECzm2XH7zMULtLNxC52oUuoz82Ch9oJT8W8Jx3EtUgNBmPp1dN8F8f8mKh",
  "key16": "4He4g4CAAhQzUttJd9mVx34XSvhWiYZy6PjUzwgafcb2y64QV6t6eScGN6dKSHh51jGaydL5M9MxKDxBVLan9rwE",
  "key17": "CzrfpgrMY9De7vMAuCDwgyZc5VkReeMrseSidesXGgkwsBCJrBGPz4BA2Tbkp8GTQWpKqyoZrG4m1Qo2xAjNBtX",
  "key18": "41Cd58P1RXj9Xvd9Mc1ahLy8J26qr618aSMPbd3N3P515cbnAFcQP88DV5VtasmbwTTzvzu7p9uJPH9KDfgNyzzz",
  "key19": "BLL9VwZYVEsLnQaKg3dmE75GLDCb1wULKsXNTUrYyHuUQGfwKQZTGVHkZo75G3wiD4oHr4E7byqhtgUfBuHq1x1",
  "key20": "54i1a3N8Rmd3k9DH8zocW3bqN5xDxEXV4kX5kYa8CHfgwHoVzNuu8gY6JvcevT8ghBFJN8XyWgCMSpg75W5W1ouN",
  "key21": "3pGEmL1oWfSoBnNGZtMfamxESP8PNtX2AzjMNkvwKE8bR5oGzBme2jYRmmCtMniG1ECZkB2emCdx6bFtKauS39Dk",
  "key22": "2YoNvKGMwBXaNvrW3pY5MJ1m217HfMgg3CxN915hMfBAC9XRBoLu5grFBUhEthWTZrsAP6hJK9tTBcEAbZEWzvWc",
  "key23": "EVM3rBu4dQ9XgixdpUJFXPfauYBUuMh5sWJTdNnfYGtgVBhXWJZu2xjoTFonQHTVLrBb3BLdTKS261owdWDTCDL",
  "key24": "43Ek9PyZtRneuhmTDk89upME4g4s2APZq3NHRyKy6AF3uyMSXofgUnie2CVFUoxiD9wFL8ewo7kUSaeWnTjH6CEC",
  "key25": "5cbuNy8G9sXBMVxMop6szqdZsrqVb5gm4nxoCcqn4c9xDFRgoT7bAwpTrWhbJDtQ8DLDLoXHvsBzavhKrFvxS2Ko",
  "key26": "PJzC88B3xQ1fi7zpxJeTCNC64FpFK3Pwa1b5Ktsy1uYAVAkxc6CnX6E6TXgbDhRftXaKz2tptrmqsT5A1hyavFj"
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
