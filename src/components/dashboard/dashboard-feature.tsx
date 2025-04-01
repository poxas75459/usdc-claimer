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
    "3oKVu77Q98wnU4m3z4FaHCXH3mzXWKJzqguiF5wk83mi1rswRDbfQkR2UcEmcwSYyApD5w3cP29xZp8D8zmyPjji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnZUeEnphXe5Xf24Ygyxp7Yq7uhknctQtXPbujnG5qs1F1fA6MXHPp53UbX1NiLN8VZ3M65gsPy6FVQcijZJzAR",
  "key1": "5yBYBLaDj5Mkh6kW2hzhY4QRGetwHpjfoQoQ4RkrjcvFiZzu6tiipNzQdK8z6wyLAANcd6CYGdMLoYrkE2N2HGQe",
  "key2": "5Mk6bcAJYy9ropPKprgHyKorEpD8M4cKTppyxDTivZiwhgxQ6oiSoXC8GKqaYJyeKk6CHZPZrmqYsazzgYUEZ3Zb",
  "key3": "65AhVzXkn6MwjztrDeNZyeFaEZcRdhj3ypZHfsCZavtQXJu7XtwNcGC2EpHt5rndPCpkwsZbFwsoGDGx9P7JuqAg",
  "key4": "4tgDBJeT7PSwyUpZYU4sVkiobMyFZkruTRzQRkeRPSyR5xwsvUVP8hk2tGVmFHgdSNXuYsUjL7Bugp7BHZoULK6n",
  "key5": "vrV39uTLtBQgCyzycf1AEJWkEx1Ti1xbW1PXU2LWBzUgpuerewfjhAfFZ9bCkV8hjDV5Xu3jBDrnZYWrqcu9TAc",
  "key6": "4hHsz414Pv6BLL8bqNM2qkTm2gnxMa1j6avbS8RE6DyLZo4eZwsTFS55s9QmV9x2w4H2u4JUTwV1CkoCCnKaPVBF",
  "key7": "4kLov38CAp6wQ9jCf31XjYEnPRVz2TDVqAMRirSRccKT2L4JqdQVCU3bQsuPB1AHRx2C97fNDvGqPogCSGmbZaVm",
  "key8": "ifM7TmnSduiG11U3ji7G4nnm165YtZmh9x1WTb61pCK4ysi1FXRaAHfLzge4N853dKwQPPAKCWmb9gGbqErGvwF",
  "key9": "5pgNuuSJRV8MifRUzstHU7DUqNUtDeZycW5w9URgqRLBx47E4QVfTJWp34yacnRLUjJYppEDVQqzE7z4cpgdR81X",
  "key10": "2pTNouAVvoBRUAYURxyTpfMsu9JvF5p1z3vs68M1QZkETjSw4koBv8k8GCBs1KKmqGhsq9nzronuNcrYosXMPu19",
  "key11": "ENHFkRJXLGeoxM29WjhnKP7LysUA1B1pKS9Zbj5ujTaDzxQbm5VgtyCD1Pxg5K5ntNrvi6dUV8RPUR33suNmeq1",
  "key12": "2A5zr3BFBeyjNnxUR1ei8o4oKQj8E5ajqbXi8inVnM8vyMCwQeNSnkhreZen93D7THtpz37quTwiJMdR2JfKWPaq",
  "key13": "3CaNUtm13no9QqZowCAPwLPMyctitffhNTB8jwDA58MWLHNLPW5gmR7DGtpgCQx5HZXwU33tDMaGmp2CLtabGHrE",
  "key14": "2p8MLtx4HNYJYi8W4deGkxJxyawQHv8PXTzeBAxJ815e2ano9Xvduewi5yu1tKNyATienK5dWSj2ZZLgW7trYYww",
  "key15": "4Aw645oLzH66HmWjuoYp1dQr8F8Df2QgSmwbtYfETDtWUk7u8JRhJw26JnP6i9htfe9vVi7ewMLrPR7NLg9UQZQX",
  "key16": "2cj2z9qPyHyLALuBbumeLyv5uorgfJZXyGPqiy4LDPWndhJwPoPFS9BQohw3tsj2HrB3UeB3L4z73MYkyKZcc8Cc",
  "key17": "4yox597uxnHFEpes1CZjjzj7E2imDEQDE4WwcJGmzc7vPfpVWBzV7ap8myR9ZPckatcVpfVhXBZpBLBE9rjgzpUy",
  "key18": "5BAycazkbwbGDCY4DfYUyFKRwkzYNHwhNVCAJxs6Brs5nf4wxRaZWskSTVwg8ahhNSCS7NzfqsLphx7VocdYSUSh",
  "key19": "oFC9Trq4s96FvRJZkKH62s41siCSwQV1JLUKgs7gowgkzSDHW1MQnRE8Mkmmv58uWoiCHwqFFkXeFnGNpsi5W1h",
  "key20": "3XNpQZE5vut7aWSY3iaSBr1CNdscKUNgDrYCjvbnP3ZdbagcDCzktBDTtVdQW8xxztefLSoWcTzLpsQMFU5By1m2",
  "key21": "2joP8PCvgyusS1RSVpnXhMXFY6giBZyp4SjasKiXy1kp39TUFVyFc2jnHNdKQMjhPg4QPPFRwYC8BRmGeaHoXCBS",
  "key22": "hMQJkEjUThV3TvVnLjUGwqp9Quayg7Ex5TxuaaZX2jfg2NRdfhptLE56yogvpiEUx1xvXTEhCZNNQkmnjLucWR8",
  "key23": "48HrxC35iZgseb2TCumJH9eA7hfbJaDQ3KEk1H1NwrjaH89pDr55uCs9PFjDvfBaEcqA9s2PxjsH2aPtatPdTPPq",
  "key24": "3MUcLj7prmD3t8GwLVmLzkJkbEnLiCnANyoUjtFazCcTQS88EGs9LvF1aEctrApqhP56tNsYrR9xqYu4oFUk2L36",
  "key25": "grRvs13yn5TGEf7jSNrrWJ2Fv1ADr5wtTfpVfY1YbxD2HN2uWTjTod81ip7nvgpuKrFHWde5u32tvW5cxU77hyZ",
  "key26": "5WsbtrYhaCDjUdigyrNM77N9f3DMWGnRGXqFz99P1xKYERK7Lw1js3pcKH9gFTfgUaf2WP3owNzHcPLT5ES1MATd",
  "key27": "5L24XygKZjUAnDRRDSJRPF8utX3XZRLxkBBpZd2LcrmzCETRJSSy2e3oTQY4D2qF1zEoQGfhMSSLrZZjrf9258ak",
  "key28": "5pDcBoCGWKVn52BEXGYZMUdentpSaP7PFXUFY1Kh4ifEnsTUBuYvhwgvmQWVBZsw67ema8bT434qFrvpaLWX6oMb",
  "key29": "3MA7ebwYEG2B99HurH1DR19FJ4uKdZrFKVf1FBEcBiAHy4HaoWXmdfSnsufGzHBdmDURH1B6tZ16Q99nrZhzttH6",
  "key30": "66jKG3SkWngPtRKfFt4MwVsvyc6q5xWUetTvWhMSQmVALB5Wbyz8VEUPJKPMvmxhNQEmnXNfs5uaPYEDgx19QdWD",
  "key31": "5Tk5n7xsKGunkPeCi6dY4Mp1CCT9PzaaToQRjYzPdQtARSSuVggGvk2jh7Dbzuwoqnf79Unv5SuJnzj96Nb3uQq",
  "key32": "3iTjYyzgEbxGSSedjd7ydZ5bN7XMP8gaAD1TfBo5fDpNn5g5bqShyxRevFtpnDWoKrTW4joLgWnVTZE361YaKDYn",
  "key33": "3mT8cjJcdAzKGFrL2uBPiSzpkUArcQ21drtcFiU826K6SGMPHfQvECSG1kA2ja6VFPZBK6QrFuhtpj3PiLQZkr8n",
  "key34": "o3jtwipkeBy7V2ESYKjvXoeKTdMsakcurU3nTLY4UPqCWeD2Y6fNbqJncXoM8EcgUQxXz15Cpf6Ldt6cFG3worq",
  "key35": "5E32t29X1MBrNTwaBz3WsbH6GWYc6Xz64qtFZRQLJrGW1n9jb7eCRZyvUVom5goK2X1EboQAnf6fPexM7E9RQBXc",
  "key36": "5Eu7VHyM2GSqsrxbRn8huzT7crDE9E3fT18vivipniVVQh3v1KFyzy5WnYH772sXFrGMX9vcyfXcjyDvpb1TyQep",
  "key37": "56hCUrdJU6RYB28zrtg9ryVLtoJPLDgP1gH7BpRWoCQF1sqZNSSGQbhM2WzjMJcRBvw3ZncfFj8RPwpS1rMP5XFU",
  "key38": "5qqGx59cbNbS5CGJfmCwajCuUkPBtAvmuDAkju2DencuTecn7p6QrNNF6TqXjmTSaZ1sxULztLskwivEm7keyym5",
  "key39": "yx7NktJ9CsF9pRv6tHSEv1TnvcEdbfKm3v4CQLoD5zyTCqzXdVLcLXqfcUwVRUfRyfkbS4jSmwRjTHGbf9y5Noj",
  "key40": "671DThr5qJeCZ1VnqMi2M2QjjgVvMqGsiURrwBJiaNqC84H9PDL6JNhzQoxodXax841nQgbouAR2zC7efuxTBSo5",
  "key41": "4b15UqwAZN13285EXWZEFf8GNJszGvRcG4JgBjBrc2kxGFvqsCVwibYhqqxe71CrN7pScUS6z2xpKt7xnYnUPwxq"
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
