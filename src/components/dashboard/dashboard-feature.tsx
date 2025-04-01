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
    "4u4PLQtoVnRzE3J7vSmKZtRzSWwf6w6LPYUX9Wj6boFbSeXosYLLgSGvne7Lw3TVxHW22Erhgxx97btEUAzbPCoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Qaw9bch1mFpUvJmxgknb9TKU91SVzw21U4Xfuj6UoKhjrEn6d7Pc2hkHfysAZakwHZGtLGYgX6rPxtxvLDEmdn",
  "key1": "5qmoeYQ7sncME5zZ46nsSdFY8BSto7U7XqZtW9Wq7AXRQqrbATCv9PqubrWareQornAMJU2fNQ6evUL6AgeAMNbL",
  "key2": "5Wy65mneKPj4BpjYa1u1zWJBfMWMLZy1zt1zY5rNGARCYtgF9x5zFGbbfq9XW2bsidSu2mVLXzZLNdwqX2qrNWhE",
  "key3": "3m3B35Lii4ijp94YUBjE21V8D2ZgKJ5Qnp8aKVMPjawwacahxizr3CA1J8fehHf3xkGisZ84sn5p5yd347YFwkUd",
  "key4": "2iCsyPmHLzePmbDopo4m1AhqtpDjFwsTMjsph6RkYtMCRTUsVTxWsvoipwmqFrK38b1PXRY2zsVo8bHN1dEbnaQG",
  "key5": "44uk3z5tkuvbeabTHreGMfhxzn2Mown7kkUgdPFzVXfadkwdZQFs4u1LTrJhnptCizf9jissarrcNuXQkR5eUra8",
  "key6": "5FMP2W91LXmqfcZ5UCKsbMVs62mXPdPJGPXkXCg1YmFz64SP4J9ycAwoHXPB8AzxMy48FqCukFXTx7jNTdUbAGix",
  "key7": "2egsnfs35jfAtn6HR6ytkZ5fweLo6ro13WUdTwqrzYr7n8LmjxSKT8UH5iJVC3XwNp36uKSmnNcUHrVPgz4gEKE3",
  "key8": "2vA9eMG3fJ1dQycYeqTFMgroAUB6mrkp4vAqR8DkJyrpgHavkyhreqwfnjRRM7LVVU4wRq5KfaAHvsbRtKNaPLQV",
  "key9": "5DaF3iQJnZCRgahSZHuYpwAgWYTkdireREmSbSjaefBnbWtLhw9Y96nntcbCkrbro4HYpdCrX54zecsMLPkk49CT",
  "key10": "2RHwtyRi9WhHZSEhQPnUzEDACVtAkXYcequtAj5iDFyQXBnYPu2omSpJZ1rDznnz8UEqVNF6BoFNJB8oHAzbvDcd",
  "key11": "5TScCTacd4tUBhjrqD8PctRW2JHfetC5VuerpAvkLZoQb1Enp3oLSGE2Lw5T2rYnd6mtc88e7GfqH4WntjUQNTsf",
  "key12": "4mkXeJ3NmrYR1fbx3rjH2e3ioFUKbiqocc9THXJ9KTj9nPCwBFdYBmNBkPovrN4fBTY8kjJ9m7WL9vBgqkpV3BxL",
  "key13": "3DG7ANaq98jcVfqaFqLMwjWxdcboJTdYhvCFgDBTyAEHS8yKPd4uUsNB2neJ2nyP3SCy93cxY5ASnPe8vTf3AdRC",
  "key14": "3QciWiiBPDFCzQjyhpzFjJ33scxqewscBH3zb1kVY4HbwjKUz1DqeMnQh1vYqQb4S8wgaKecUEWE3QJtGTNEbTTz",
  "key15": "4whFHpXd17Us294d4GkwcS66waRiFhMGtxeKGidmG31fMWiixKo36jFMyvrSaeTMsoobcLVNwtmjpkPc4Wdg91mN",
  "key16": "5dpjY42ZoaJi4LgzfyKU1zVe563eaPTi9y3LK6WwNPMa95JiiMiRMrzVzvQ9L2HD2qUfAFq2G2DudTs2BM9VEhnC",
  "key17": "2tnAmM9RacpiJjBEtLqdn2dLp7zsCqvEizHuxvnfwnSrLrFyyMNT3LyHmVtd3kztFnSTTB9hYt1deaatuEe7q3yq",
  "key18": "2HduoxwfxhfBx2CtU9UusM8nnjFLrZwMmqFbHQTYGwWhANxac3Tw5Hv71nUcoZp2aUvxWZSbrH5kKvNmHbV8i47H",
  "key19": "535PoJbPgUDra6DazS9mxBv5KLWYezEPGWaQ9nW3xCgub7VHyjnGUDosmPGbQdGsjaqjbJtGpvqJroPTtiykYVpx",
  "key20": "e52cTCUbGC8Ee4GM2a1hTzSeg6AkEvNDd4DTHA3D8jBMjTwWL1uQuVaNTrufx1mxYUVRqZN7QtTRsYRgWkJXvqi",
  "key21": "2Bg6PanKajAxyEEjwLkytfk9BnPyiSfDhqr5z8B9XoMcsi38VJvE2LG8j9Kca7jaeDENfYFiFgnHZbZyDheDVYDJ",
  "key22": "3PxukYef8nSccBb9SR4HdhZMCCVzJ9z2F62FmeZ7rd7UE5YtaRCipP9GbuBdqUTJui6RZVYJ3TGzMX8ybv1tuQHo",
  "key23": "5VvguRzX9cdXcBJxogtsRDaZynQeJ9MyUyfDnP2gpYQVGm1X7DeqtLnEAC9G3qqRvrB491Ro6dRJTTRRpn7aHBKh",
  "key24": "4zSEoEofs8dmwRH2jBT8DkSr5iMu5b47UDSeMLhdav5NxqgDM4M5u8hojvNNcZuZENWppcUV7aJXu2MndCSHNg9u",
  "key25": "k5Q6EVE3EFGxxiUuPCdDixjWHVDJkVPrpLDKWiGWSvYzLTtVbkss5kKLpZZTPb2mquqAn3XDQNE12Pu95GKQ2mx",
  "key26": "58YVKfMA3km8EHA5qQQj4k8QLa2255mzo3ksJBvtZyNGmbeBDV6XEjFPEv2E86C9HfyWQ6T4qY69v3x63SeCFDHR",
  "key27": "5SBKbCEJAKFeK4ga89pPgALoDVUDctKaf37MuTk9b6ntJofeTTLiyR6Qe9454gHcbLcY9SrHcu5YyUAzQBU2B7LT",
  "key28": "45zDDELLebiT9S6Ld9siZJEy7wi96eCNsXu9aj59DvuagwMYs9eDhehp5QgqECpgpMpvsPhV7Kxjwq1ZagHe5z6H",
  "key29": "4UR4tS3NdRHLVaHez4HEzLfvxd7nEa1gVEufTtyt6GLFLiZq19A2yMdK3ssmc8NkBfRdk68sWyE6MG1g6CB9oGKq",
  "key30": "2e1E4cx4r7stKaqwunyHDoR5Wt7VLkMVeS4pRoSiJMwkRvzxqMbhCPeCgo8W4rDYNifuCiLLdkTBJs4wyVc7RLqv",
  "key31": "2A2oTwQLfzYRqoNwAyeXqYEELwun54ZwAmCjLbdk7Pu1weixmkBPvqP23R7bccJcVLVeN5zHeQczoLACGR3nBXRi",
  "key32": "4v2gdWsfepbiPeKSWvuTX1GMQTyzeNBTgiGL3eCjrf2DASMYWAsMrYawfzZE1rwLnNq9iovfr2oQAw9wuVrGudAY",
  "key33": "Q32NPh9Y7MSBAwnq84MveEMZDkqKbEuvEMZ4Xfa52W8xdNAR7EtrxjDLRt5Gr3XKLBNqcXGsL5JAvdK5mUauvfq",
  "key34": "2jyfwp6iCu2Cw96UF5QQgUwAdwwJxPMqrFs9TDwHR3X3LNoXLjpWh48hCAUErRQCr87Wtr1AZcFTXGBaAeFNqB3h",
  "key35": "4XfAk8NNBfWKmwkkw8YHLhyfJvyHgpinttNoooFurjZY9RT1ELyhaEoSPMGUggVuFhGFerFWfT3Abz8oTKPakWrh",
  "key36": "9ucjsMT8nJCPNDwgUhGKngJe3poRGGB9KKbh4jkda3kGCVoRDvzNvNsWh7KrjEkSVF4Rwopq2nj67sP7ndopfUr",
  "key37": "tXKHo7p2ncBJPTZUPzcD6cQTzUgsMhyrvWgxiskJiWKsGXZQvzJZ7JGostcooNrbZVp8FGvfe5CerijaYAztGEk",
  "key38": "v5UMCfh8qqohM2ByV9FyQK2dPqaAwiLyvWP9xor9TAUktin2XawWvsy1waUejA7J1zL44fo95vARohw23DHAHiE",
  "key39": "4xj5EVQ5VA7pzm6QGGBFRJjDTNKe5qAzEoxewQnEDMeXAfgUy18TAzRc1Lfv1nZ9MyYiyCou2odT5HFqdz6HtBnh",
  "key40": "2cmV5wUYTkucD2VNiXDecyhrCEk3VJhAEznAcbshtdMpgo7GfSPW9zPgJjdnERXK14ApNwLb3CNP2TrLeCRRzr67",
  "key41": "2NFvbYeAs46ZDJpHLA62C7WvnSmNCHiJ5cuzfTbuHax2nAoEKqKkUYVHzjKf4a9a7wrV5nn4W5FG3ayfiyUMMg3g"
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
