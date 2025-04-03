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
    "5WwAKgaMSPWm786DTUZ46ZfBCyK9BviCv1TwJLUicp3wHpvNcVycfQgrJ52h3nb15Nvh8u3aWzJ4P2mPgmKksAjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHZRxiLJB7vGmAqVRjdMtSCr2itxMARDJAfixLs1ZDX2tGL31CjGd5WHL8AXpTfNS8V4cCLrbzSX4LbzXgBTtQC",
  "key1": "4yTQfyWWYno5NiF7vUAoyig17JR98cCugatUunm7cP9k7udQktjU11LiFwbUZoaFgaxP6WWACbAs4SBvvontn1Up",
  "key2": "52ByKnCBdFdvz3WvkArNTQZE28yVXKBMhpEH7Vxy8MVM4m5TbnBeLBn89Aw5es43KYcmoSoGVnkYJxQwKV6X6SZS",
  "key3": "3ruv9okP2Yn6Uwx4oeGAZKNN9WN4uBJRdJCL9yQoXJJmsakQ1cS33X8jUJVoXFGkR2B7bqEDSC33d7BP9KfuJb4u",
  "key4": "2HQfjWhG2ErWZY3JkksSChsZ1BGcPMY3PfwUVqHHLCw2w8q8AbdxzwQ1AkF7RYm71fNyALvM6gLBGqSkWdCPyHRd",
  "key5": "293Djyzzj2v8CPWj4CoepGU1CaRWJ3QKF2QsUvj3D5ynYFGxo2EJgVdYax8eZoAM2k9jW1GnGgHmTenx4VNDLdAV",
  "key6": "66ey6ZiwBcf6qdX2uMMvhBXk1JaHyMANgUf8NRFQVS9qSsPRNXXBsnL5gb6th1cTGJwufTSPFT8oL2AXJoco9WyJ",
  "key7": "4FdtuYXhLJkyoQknSzeoU6FqgjHBmU5RTSCFTvMSmPMJiUJgULfh3pd86TzUw6XNSLYCPPZLaLzGvfeRLwqGr92F",
  "key8": "3V3UGFsDXvvwKxKpxyq43DdsV6zn7yppnrVJ8Cz2bc9RkbaTfJDzuu38J781AELqEmZy4hr4aCFZvTV2N5nna1zq",
  "key9": "48DkNSa3BVpy8DXXyzfAdvpQVBe4Qq9xCGFLK8WJySQJE75Rfhw4ue6iy5WNCV2tzZj7byiNtBzqBqx2Nd63HrEZ",
  "key10": "43VkYL7JgRxLayDiY11HhiqdYnVmK8N4RDi3NMdR3wptjPQZRe5sYRe79dzKJkGb5UAnC5dHN1bTDekYDq6H318p",
  "key11": "PpHZeEtPGb9XTHC1CpX4H8th17Es8dhFHoQCCD1SSAqscTKAXGa6TKeQsLkz76ugJN9utJ1qSyV9bvMfW8yBpfM",
  "key12": "21rBKNsd9KckBnvpEMWJ6U2X4LKZLRZQPzxnDr1jCRNGDPVTdHg4NLyq2DHCge9sSoespEQeHHRYoofcx2xTBDtr",
  "key13": "5wdTLBE91zT4h21emEQaZiYw93pLVapbtMe8LneSnuGuqb9s7Y2YbSojMpgvc6QfEjbJepMDPkVC7dpnLVEbibCa",
  "key14": "48TyJX4KPuLzWDa3SETXmUfQU2JUBp3CLiUSmmJoAXYt48f7HfBwxvtAezYmS5PFnLGBaq2w4QS3C759V9rGVJck",
  "key15": "5K2oaMEryKybQuSjQtSwFM9zhz3CVm3HGLcP3YeG82pqsNMVPVjprXuoaSV4zsTUekgj3GTLKfp595NJ4VmuPuE3",
  "key16": "28ezHR86cA233rCA3D9i2XGnzQxgfgwnK58WpbJyESQeHDfBPEabKXr9mvhKcJTGtid5hQxZX46uKkdhM21Dp1mY",
  "key17": "4JB88zEid9LeKY6DTc93FyVbJTbTDejf446ATwn2bpkWAGiN4mpLucehTbZ6x1GoyYP4SQvF6QXxqXbYeRkTUrGW",
  "key18": "2pBN3qtgyPPE3M3ec7bUg8bkL4GpndKVt5maVdXvsif9VJeSNRATPuby7oMRWwGpQHzhzhwrd3xRLyayNV4UZPug",
  "key19": "28x88bnkhSqXPQg76UnvfQTd8bRHJK1QeS8fZJ5Sz4BtnfibhprgfcpPEkWpZcD4xAsTBaZB7SGeuTUioZ2y46EW",
  "key20": "3uSuoy7HGmz2DEeBsyBoBmo3tpWLsFb2Bc1A6YFhohkArbaoJ1wqKsn7ZsnWtz4tWvgCqkZDXN83ABvzfZxJtwcy",
  "key21": "2GKQw3j4V3umkwsT4FsyvFHJQ6nDDcrZ9B3ar1fuox6BA2fk57Nu2jAkwHwnkQPc8x81fAQMywfsoHAxn2msvatB",
  "key22": "5vPfYmrLZhBZvrTVr14wuAbrkx5MS8BaVYYajG9S7nz3adwwXk1qZGo1aok4M9WsGE44mPEaoxyMdKaSnBJa14Lx",
  "key23": "3XBuWRkpqarVyHhchzuxjgnfTvVokGwxxVEd9rZuBd8qq4CYD9KXUK253gRELGKDPQMxpESTLmocyz7GBc2PmyBv",
  "key24": "5tzz42yzVr4wzVJd8uj4KFmZKesYetMwtkVjotkxBzKFgi8SwQjAJMsYpbt7hz8imdbeFciFAjtnYm4ELbzRHur9",
  "key25": "3H8vnoT8jCY2wrU648HQVsg2xPgJmjbHpwvFprtZZdAiVM2jNq4kUjVxKgX4o2QKcBSRyXwLuEsh824LQ8UtTXj1",
  "key26": "5eJWuFDKGxUCpkjt4ZTVcLpFgJazm9qZQ9acwnP513nQ9GhcznE3qF3pK5LqugNFNSBoRbdoUZy5AV3mt1wWKAeu",
  "key27": "4zdsjgF4FJovv1N5s4jRa9n8bMxm8TZoKX2fVFu3uLYv5iV8VRG4kWuSzMcT81JFepDs66V4GjNEvKeYpEoDgA7b",
  "key28": "2u65nFUNSQym2UoJrtVqcRh9k6Zqx2cVt6BfPmkyYb9Sk4MsFSdDDT4QAvpk2LNkrZdq9baATnsoiyYZvof3LLkx",
  "key29": "3YMYcPfbyLccdQfn2e9VYzuXQSAP37J7ee2UqC5wDQpprfUjau6pxPfUUBVGKJtz3jqtEYhCufgJNiTp89Cvdfai",
  "key30": "n3jEimY8P9GFM1vC79VHZxLFP4iw9Vgb9VtdqFT6v195DwikRPdbJkGrUMmPLVdNMygz7pU2K1zEEo9pWvFzVRZ",
  "key31": "ExA8Cy7ZX6oaNkge5rxm5yoi4Det3rZ68j4QDzApvttJQSMzxHYUmviC3MJJtpXt79EovF6P6YF6M71N3zu3Pcs"
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
