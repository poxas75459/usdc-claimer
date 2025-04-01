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
    "3yKQoj4rFTNpBndbFL18QeRgbu8t9ov21u4sG4JxX3Ug14gu3EqnmmVUJeR4RdLSMatnJ93BBbB8yk8QTfasHSye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eqyfyzx6ia8kUCvWfXdD3Caqez75fNuEB9LkkemQ6bFUhduJPcfjmaW3D5dG3bNTSMeqtN9FaRSDSpLfHan9Bc8",
  "key1": "2rRPfwDxEvfYYcKtV95cRnceQ5UWnFA8MfesEnuH8NkMFRdpACv4CXZZu1mBnuAiRJY615BcK4nzZPUDdSYNzawr",
  "key2": "4xqTjUftudeDsvpbeJ5kmsHKM6QnX6itZQV6xydhPByRpZrQteJzqijCiir7HY4v7buqjv2fSnkouFVvSahxe4fh",
  "key3": "5xXDwUrYvNXHPESqbNqsiVvEP9S8fYKtYEHpFdb5XU7FqEvzKN9qgGwrqAxF81zEQcSBJcf37vvushSQuyfd5BAQ",
  "key4": "3hWkyaMEW6ZQLo4ZvBVJtViAxCDLrzrWEB89hVbVXtYg5iBwkYHH8snSHDhJUJxU4zbwcCqrVs1WWrsF3S12VKKu",
  "key5": "2USCRXLcN4TDLq1w6dDVu6yWMNLcrzAg2Lpz6scDKLnmiDJr2JATPDFifo6vRXWe8JeRYnDEB9coiH7Cj1cz4bnb",
  "key6": "aBu1xys9XbP2tznSW6H26Hgap8ho2z98Fnje6yX1USCSE4WtUFrkJKqpVhFYfgfjiHSbE6ZgcVkfXHzzhsNKJHE",
  "key7": "MRCbD5srih96ss7uFR47YdTPzp1MaGSSCChRovR9LrHAw1YgVrnjgvrTSutwx1XZzXruu4B7YPcB1AkPUYJ6A1T",
  "key8": "EGcei16aK1xK87adZ5TZbujqVEarjKJBN739p2Fm3gGj16uBAQSJetVLKvJGgVXmYizaz7CeoCfwNFzkwv6a1PE",
  "key9": "2tPTd6uNM85Rxc4KXK8icWj5RuoDGB6CUKx3B5gCiP2auxeTs5kvqmyXGcY92nE7gVHrpJtoj4U89P85Dcim8qHv",
  "key10": "4RtchTQmmVssgM5sdhE8jnR4edFk4r4rEc1MhYAHqLNKYuaznVcptbCaNyEpRYzBHGZHdrh9SDp5uL9vpVQN9FA",
  "key11": "3WdcUZTvxc8Er8NnhKJ7djs2uBEsYPGkdaiDHvFwPZoJqfY6GJiU1FYqv4FuEccmqVStavkqDkySgA6cGrAnX3yb",
  "key12": "BV1jfUv9AoF52Rjhkkc5KJrevZSqUqFg819gkrTrfwkbsTM3RVoW5gy3f89WA7dgGS2Pa9xbHi5HqFXFpWSP9rM",
  "key13": "3rpTqkUxvd1fLksdpmLZMVqycChBEaiYgQ2g747iHuVfKUJypUY9pu2xXgJo1FicU3JajaEGhn75jEydnDvJSS6Z",
  "key14": "8zubnT6qQNZQcXDwvPRrx6C4cHDgNDw618nt2Ei2kVZG1ztR7aCodtqUwRR43vg9PgBiW5W7t9BbXSiicW1vu4w",
  "key15": "KMYji4922kZPPHDs7egBbcyZCXUtNLGzvbvbUVgGfA2drn9EqPGyZyePrNfK66DEyer3CdVnF6ejF7DKB3TUTmg",
  "key16": "sAdNJ8pGb3CMUp9c86ZebAnvdHvhsnbDxZeN215TGquaUm4fX6hGqrX8kEhT8u68BXbmnBJHztiufNUYcHJJKzP",
  "key17": "4CgtdFy1BUvkshCMoPF2GbMQrsnRG3NRk7eqGDHZoUgrMjYARddnePVJqpWoikQEmTLx87mqJx3HkDrBvwrRZZde",
  "key18": "4ZJX8WnEtsMWWFw1mEi64sH81ctcy2AadXL6HSwREh7wvr3JcEF3extqEudEg4xZ7yDKEeW1hL7EjGnquRr5Cu2b",
  "key19": "dxbYmkf3UgtBycvQAxE2J4JgsLt8MYzbPy712YQBXMNnfhYTHJJaw7pF37oVrduyM9pZyunYPKPwi53H5CuLz6U",
  "key20": "aUKiaFcAQnSzpMMYw1TmSqKVYdZdQjwyN384MbeWbvCQcSdqj6aJtvQUcLaajC8hggdLAT57MgH1jrnVdiwxHTh",
  "key21": "E47y6i6g5LYy2scoR3JsGvWCi5zgb5QEDQ1Bpu2TnHS3aA2QLaMNEktGg6tQf8MrS6Cs2vV73W4M6kYCEg1UQrF",
  "key22": "4ScToN3eCAGTWMtqxfP8kkMjruCNZaRDYhR8MMMhDd4MusMnwSGfGYWoguZ5rGoSrVhpSGc6d3T7bnz69bNzvyMc",
  "key23": "PjosSsNAeZgenTXYGPN4y54L63kH24GuYRXfia7ipJaCbAPEdkZaNUdATQ1R5BhY6GaL9TMQXmvEMXrirreSFhE",
  "key24": "4zijaywgMTpvqyYPhWL7BiN9fefCJNv3nsPcf13sSyFKeDvnmiCn3dGsvxtzX9YowtZX3EA3nnuNsiwXc99EEyMo",
  "key25": "3apY12WGv28caUZFYuLtr8xkxA4z5Zh6tnbTGJ5UkqGbpfhvC7YJV3p5Sf7WHQKhoNukuprWzgTGwKxP2R4tWw4J",
  "key26": "36fBfQby3AJisHDas4HoZCxA41RCEBMsJnuwWvaGMWCRi5LpbjQAsKpb6Xr8ECKsGnSe7eXpiLYz1Fv8qS9wqnDq",
  "key27": "37j46fK7UkJdiLjfPPMSNhbFHUkrYSQiuEE5GSGVXqvwxKPcB7jk3HpwxbLvEBm7pUiiZVA47n9MyZG3CMjZA3Cb",
  "key28": "4u5g6ZkEYZUGLnFVK7v6keoUgHsE77Q3yXekaCPQMeM1wjvfuYah7pQyLEB5bszi8B6wHv4TVqQeyWiybfUj9dL5",
  "key29": "3mZSiX58q7Uw9Q41YBM9FWWnf4647gjs6pUCSWqXVwQCz7eq5dri7winVwG2PHBou75AcjQ4UunBdFqzsTZFv2V5",
  "key30": "54RhoAbbbFThmtSZT3LztbTj5hnG3rHFMhYpgfey3XiygwYU4Y6NbyAvnWcKEd7DbjjfsW7XRZRYHwkksitRLVvP",
  "key31": "5N6vcGJdu3w2CiVrVTqsXtwisneRaahgJeqXChDUc7jv2yGvtf9FtLtbfPyu2JCs8GWQRvuXq7rnZLBeaivrptKs",
  "key32": "2qqiJoxSKEYSPBUTLxhFak2eiz6kDwVyds5xPNcSzZR59eyPHoafR4qJvLpaEZ8Ndmd7gKtLRFPTp8G5MoVZbwHR",
  "key33": "5Du9FjxJgLe5YH12WRVHgiyfBveKePyVZK45AagkY6jgRVrmrGHHJENPcSeTATkAcJw6ahsTF1EopA24aZW8aNCo",
  "key34": "2s1f4aLaqvJ6zC8xFXXqJcsrhQgB1PWMtUY9SRcMdyAvDis8z7nGyaFQH35Ccg3fzfyPTB8PNips1Qy6LX3nsWTd"
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
