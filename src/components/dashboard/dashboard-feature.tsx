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
    "33TuRcDzZQVeg4S8GhT9UqRjKjFPXR5zicSSAU6qbYgsQH3HtbzPn4R35dkvJmbBTM6eqKEATNAdF69aNTYfHwPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxRTS4oWyNCsjY1ZcNSQPXHCNf57djdrW4oPp9pWXS4un8c6fTkoyr3GdausmJGPuGtwy8FaMdLT5cB98HteQ9V",
  "key1": "5ug7EmfEN7qD9m7muuuvek9Tuod76aFoTytPntPHSMcETjFBmyMCNWWJrmFWnirzBFAvZiEARjHLVfQxU463kgv1",
  "key2": "4biZxT7ELpV2TJmLJHHAKt3ncmj3waF3SwGEJP1rssqoU4E7EcYUiWvvUfetmi1MtMPgWGJA3n7ZP95MZVDRkq8S",
  "key3": "3AvM4qyZYDG2EfTM4D9Ph14gekCU8jjSBDUy8DwPxWUwen53zjWRh6JaSKtMs7VkofZy6jKBVocQnT9xx2BZsLY8",
  "key4": "23oGCVfz1kbgCVnDqcDqeBwX5WtByrH8HAJWUUsQzopRTnH2fRyBdR4JDKqQ6M9s12fzNz7aEHeHjsM3XtDpJpsp",
  "key5": "4R89KhMpXwu2jRwKonxnK3v8gc6rrS7W3nhQDjcxnS1bEVeyrxP2YGW387RAiEKTPGMSkbVp264wRnK8RGdKv8JW",
  "key6": "4sSMxuSiGUVZVXL7SRGDxtHTfGebzTRv39S2Vs5NnEYSrvdqWJ6F2UDVtHRh3KuxSNFYVHEnoa2FGZmmvjxQika8",
  "key7": "2k3q4i2meoACD6n1xgeanAmxtpbQ4N28Tanbd4DGvAXZc2yYZCVP13PLDC87jzJr67nMokxVvzCspApHeFGHta5Y",
  "key8": "3oM5TJYfBb2siCkJaZfH5preZ2e9kZjehBS5pWC4fmka2VU7D3ycfoNxXjdDvfods6sEXGvmTf4y2x7iPPwig3as",
  "key9": "Y1VHXBVEgGwcqTQ9tGEYnif4AmPgXhs3sCqq49AXNeVRRH9a6fT8M7hPiLEuEqK3WGNbpKnkwxJ1JxpeKwQrcb5",
  "key10": "2a9mkx1TrRNJxHi5A5qKFKjseD4AMBDbDXHHqF2wnsm4knqd2CABiKzBhm72SH8pRHvYBpH8Cfx9HJUmmqUXm7P2",
  "key11": "5mjLfxRXMXSuYYbp5CxAe1CYXfHsFi5wuSwfUELwe4R48mACYXHDANVCxTWXR71HWyEpm25ngG86rLxqRD9GzXpa",
  "key12": "24wYEeqZmb9Rzi7QBVTgHE4BPGNQR3dPa1YKt4FLrRSSWt7k4osUcdJd1b9riB8pcGqyX2S2A6w2GmX4Wq9X7ghe",
  "key13": "5donBgRA7WBYrNgwNBVgVbjXQw4M8DZodwncewoZj7fbEU3yBnCvkEXytuaprL81m7G6ZqaGQZva4R28fXbmikeT",
  "key14": "6586jeiKK23b2EVXsnwBmnt4Fdgwr1rP2raUiW57xVMscwW6Heos4wrgvJkgrgJ88R3kGHgcg1dJr6BgCCQ39HmS",
  "key15": "5vBw8ESd7EdQvFwHx5JTE2pZmeRDj4Kq79KuZnfLxu4bvPybV8nDmUkoDdHZV3p525MtdY5DNAbss1iskomeWjbn",
  "key16": "4PmCd2wvrZ66teE3YDBCjtMze4SYqiPmAMCdLqpzfa7KLrPrRiy5XAJJHcag9o7hhdnhBRCV1e1bX643UHhancU5",
  "key17": "31CvUzfzxZhDq5NtxwxHutydVeCCJqZUoK7cW8oFvo6QV21CazM3mwTk7pWrHBcWbc4EcyKNEBzSG1HfmxWuD2Rz",
  "key18": "4eZfJF5PwnB3vueDa4vaVnvHbzJ2DEkfu7pCVrmfhcGh8Q7eQexerWbLGx9NhELTSssE1pgpynaqjaAVT5xe3zTy",
  "key19": "3Tn6NfCB4nH8gf8XGTCn6i7ZNDCHsKtupfMYUvEJFtTghX6z431Dm24VUQhN7UbXHsQVYA3v7AEK4Ma8fVy6NhaD",
  "key20": "5VLuvPb5FVmLSHU1i32qLYb7vqiHVXa9gowVrBvhtNx9vhE9TNMM69EhVh8kmWqFxXchwH8iug7p1xPK8XgJEcCj",
  "key21": "azDdy93jkVn5jYSBgbjwiJ5v61SCAQuCoKeEqpcVG4X3r1PSMM4gncSotKDsLBan6mNJctHDZyCe4aafbRYcQBM",
  "key22": "3tUtzpn4y15rKaVWbnJVuSKJtYRnwREKy1TcJhV2mgmofAg1R3ahXCfX4L17FEcS8snEHhhKE293rDhoQo5QcfsH",
  "key23": "NCC4pPASCs3zAiJ9YigkJ2BDEeCWe5Dpu3XK1By3RVSnyywKYLgZZ2HuDK2FQnRgtnepvooy43eYp9VrfQBMgDs",
  "key24": "2yELnyDt8A6SU4vvQg8JqE8ykmorSkfCvo7kdyFFqy4b31TXcEjTuq7p8pwDSDkG9esyjkMiyY4tWey7h5usAmk9",
  "key25": "33TiZSnntmxsEmRodBm44ZZ3tCnqyy9mDQwCM8gv3eSHLwgmQ8vn4qXsijZJbs8XutwaLqxryYgRfEDsakdx7tRt",
  "key26": "qNYGGWyrWKFH6x6eeWGss5thC1cDKN37FCDP2YwN1Dv5gqfafaXULpTPCaGVe1SgJjM9HxGhfz7QThExoBZDMpz"
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
