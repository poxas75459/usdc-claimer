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
    "22WodMNxULVzepq5CwxhToQh2QuY8PCDRhw9Z4vyCQ5G37GtvaaCpJNFSAm1XixvZvLhBrEsN2uhXPGKRrMmUG8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47VWC5E2f4WRZcCEw3spqkoRjDASkn9gMwo2n3QVMEc5VcqvahxuFts6bNKEXE19oCiSR2rtTLtzK1ERgxxfzXxE",
  "key1": "2UsV3QLX5pNkX1vyS23PEUrfMjk9BktXMx3krY1Jscv1AREY47XPyzFmaXGhb5a2qSXUWVkLNkkVpRSmV4xhWCSo",
  "key2": "4qrm5YNXAQxmUkeJ8haugcd94y46w1uKATvExnLfQtW3igHUf8wMv49Yc37ykD6vzSchC8soV1Qp73mMF94M5Bfq",
  "key3": "5L2jq2mgKnLy5CkaU4Z9kjdRQzJruEnaZp3uKxj9MD3WdSvkUGUXRsEXZPo87uqkLkwrX6cA9CN4DoeMHm7QPPmY",
  "key4": "2JKSmEdcbycr3Ujv3BWDpbDDLr4i7L4JmG31gLb4strcKrTrH7QZqVzphbirwzTjBqr5sHXVrQNq6wLmbK3irxrJ",
  "key5": "3PmryXYKiVhrkqPyTNTEtfUAsefe6q87cowjVnurNPY43yRoF37EWwqFpwxVFtqDy6R1N4cjComfncAze5diBMY5",
  "key6": "392dEpmoNE8CN9DGPMEh5ypWmZrsgwjNEZq6giRDkA5T7fVJqFP45nwvKLwo6MhGMo1n7i3an6GMunJBEinuYRWw",
  "key7": "4YGUYL1Hc69jmx5g4pxVXw6ydHHzgiyYubkNqFYjuKfraxEfM8Hsdd7SZLd1UkftgSeG1ZD64yHFXGFy56ZmzREo",
  "key8": "3ivEAxXs7LryVLewXu6tZj77fvtUridGMDq58ku6VMzq5NM5xfWWh622t6vbHF6nDPcD5UoH7mNJX9kRxvwurNbB",
  "key9": "3aJNQLAJgUj9EH1EtZHzGHa6UvZpEjWBSshxjWGxpJ3JriRPeXjx6RdsNYvo1gi87Vbfa2go48iyjSrAzirr1HRd",
  "key10": "CDM7Xfk8soHEvKQePpYZH3tQEBKxCEnuB4iuHyXe8GrJWkjaMotS41sa4gZgequKfrrucQAm3SrdqM2dp36UGJW",
  "key11": "5sMKvVVR1aP6Snov8EVWz9Neko6LtznmAht3yYFp53ZfiprWm3D3pz1ghHw3mkAegbrpKE9PMVpmpXU5dxbojmYX",
  "key12": "5vf7egEcysSe9RtVzwqJpKyEM4zkE64Q9Wmum7gChnMSNvrv8rjTRyoyGrSt3nAz9BmZGeQC6tM8u5gYzv2kD6H",
  "key13": "22euDWeoiSGdYf5RtiSwZ38NyY4s5QEH3oQXMMZExt7TduxhGfWkCnTgdLGaimrWjWB3Lvq6qqLFcQkwioL6WzTJ",
  "key14": "38XzBmYKGqkGnJtewcXWN5ucj3m2LuaTckomdSJXHGLrafqokfqrwftNkDCFXf7FvECr5NuTjkX1Gv79vRU45pjc",
  "key15": "5UEdBfoRZRaGhifh5zCmsYMfjx3ejP8JK7sD8VTjhbj7PJK68ZqjNr8T7Xwf7qzKx8KWvs7m4xq5h5THRcHTiriN",
  "key16": "2EQZvEPp9rR6EjnSVus2Ri1C71pCJMAqGWD9hAX7Vo8DyGX1ESadYNCLY1LckLskPY6CdokQwqwAFyKundQHaMKr",
  "key17": "3r1tWd4oEKTshakhBUvbzFZFwY35tx1gy7mEjFGwR16AVhZTMU762QErG8nUMZDpAWhAtHjw2X2iRc5FtLq3Vd2w",
  "key18": "2HC6fqDEC6bhYUMaFQC9vEhkxjdYYz9pXJL63vdRGsUYVhLg3vgixs93sreME7qGxoZBFBVi2JoRedTcuv8xyNVb",
  "key19": "BbgxXUCvQPy3sd9DTDeVxA5wDJpX5j9xeQhDxxJqhESVL7NssQfsoZFGvJjDWzCZRGvf9PYMVgfB7YVNHJskPe7",
  "key20": "44y1M2q7njcxfd7wssh9s5a2CGrMQXisr1W4rDjL9ffKeE36Q3DkUoR4XumHPoUJTA7QD1tNHtTuaiGhbfBanjyy",
  "key21": "65Ma4UqYreYfYmV9Bnnv4CtMuFnHfGGMRSPoZ4amtk85DBF59MuwFoDbzZg2Xb47UfxZ92SevGFRgpBfeaXa4BPu",
  "key22": "2JyFm6R3RMvPywgwbxQApqaYSKEgQ4jUvEfDiehdXwEjgfZWCZZC2xZCjGWyK7SiynwnxpxtHPPF2Lj9UHVXSFEk",
  "key23": "4CF6ewrRqtpFwWkK9A6E4CdTx1UxaWZMLVLjP3bcu8XRiYFbu9zDfqvunCRusQUqNosNQ9BT1FTouyGHo1oxGuvq",
  "key24": "5qQwept5bngUqjKQYqgyyNS4kS4ChDzcovyfoSJLsVNQXEbgfEotwCyce5QVMQtVAUmbvjrwhyepMrbQVhE25nfZ",
  "key25": "67VEsZBekzLppLDhtxF9ya5ECphnTDzgYPAaijdWkMz67aENEExFDSLp5TbVZzQLLK1nmmKbeNxaph8dLUTNejGQ",
  "key26": "3k76f4vQqKeFREMo6eScrkfSZ2nu5DR2vXnncuddCm4Zitpd4qkzE9ngTHx9wmwcxwDLdwvBdu1ttR4Feu8hixpC",
  "key27": "2Wqt6wLqjmATCDeh3pHBLxgprWG3JGPPnxM5jZUXUiW8E9cMdPohZ1TK9MSUuNt5NrSYZEiHurhhaTNQUwvtDMkQ",
  "key28": "dLeWiMdp4iENBPufj8o7ivHSMUr6YVhmvgiuRsHSxip92FPR5Pd1jqpScrutwprxY8dERds5865kniNmTrrJav9",
  "key29": "W2qWtw65CCoEUb1EXtM9oGAMp5wkUM4fBVw8WbSueDtL7AS14pnRNMZqu9yL7eWURBpGjyxZG93VYHaGmxe7jaN"
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
