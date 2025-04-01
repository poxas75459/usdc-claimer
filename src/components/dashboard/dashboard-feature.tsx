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
    "5X5EQFshEvhT2YtCz4cjxfYt9u5Ex5vwBRkPE89bE9VTpAvVgfK9btyDtsKiAYP7SD5gWYdMcLknrizG3NXJnxbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frdouMgjraxXv22cEAWVcpkPJDYwJKDuoce7nsaU8VkkY8Q2dxT3JKU68wbviSXJmT31rreyyaFrYCLQNMxQEkz",
  "key1": "oXH1bfoU4DgakoR3k8mmPNd92syh8RPNxmoZB6GXrR2E8WAuhLwEbkyBCnK6XTF9BVVj3mkwofvkAk8mjJMzstb",
  "key2": "sPEF3tXEJurZ7xoeX2WizWqnZLfd5usQq5Uop5zD4Uf33v6v7xDw9RQaym3SzTeAvCeM3v7pAzur3m8gyKGYXSk",
  "key3": "5LGWBHCpQkdnWSiHXP4jwVXE1gk5L1Hn2wP9EQJGKEspZ3Jfj9TExr2PHBTD1K3y7tKKnT1h2bF8wcF7Xvw15L5S",
  "key4": "gtuBcJnkmrkVyJ54ZB3iMvaFZdYk8avN7kf7FyDhH3oPBe5UkoSe8R99HESbyrqXukcWXVms9DysLgGHXSsnxHP",
  "key5": "43carw1Z8FzSuaW28245XT9YybkmwAbunJZxfgvvW72NdWAo5oJaVTjyLNNFPn1K5qEb3hNiasUt88oAT1YtHN83",
  "key6": "5jhYvjzhpqX9u6f5hEDCDo6RDCCtrTBCwqGmkvAYX4QKNG4zJudRrUBhpZ2SQwmZ31Vt1G6M3Sq66PrAZST1pjix",
  "key7": "5AdkRwwHYKgtcGw9AoRUzyLMFypurdighptqtiCdCcbnnbcsj2st1GJeTuTXY7wJSeUSmMpTvhh7YEWFPnV8tH6B",
  "key8": "h7x5fFTx23FvS7bALR6GTJ92pW7pqYCngynFtw9ZzuBAdyQuXwSjB6Tf3mW2dHNtjFDdAxqvnoUv5Sw5775GxtY",
  "key9": "5W6dZTmPFazUABNnnh5QqSN2ArPPkJHh3t3aQLELcJygNRFCu7V93fMm2b5fSA9EPDE3gXt4PQ1PYYG7wr6oyZYt",
  "key10": "2w819gT9u3oPHaGspVi2VvADhYXTPJqHq5nnFitcH9T43Z5t5W1m9n7BFTpfwEQEjmWDvpgjbvpZ3wioU5ZPjZGB",
  "key11": "5m7UXiMtWr2cr4KJ39eMmLp7NnDVSpdKvVUWwt1514hobLnxAQfqFNQDSYeF7o4rSpSVD1nMnTiHabeFJzndPX9E",
  "key12": "3Tgi5RdWSSVNYerHH7iDrePdruZ69cQbDEFamcVB8vB46Q2D8GCMmqcY9RyrTUxBG7zPNQFRRcptFQBQ3DJp3hJv",
  "key13": "35XH5kLWzE3BRZYvuhsde2a5SzT32XQsMeKdgtUMLqVh1Mo3sN4s7XdPhVrUnhWx7w4XsXdJwB81C2XV18t5SriR",
  "key14": "aX415sQQZrYyRCWzdLpHqarG81MJNGZHvferrHiL22DNMCr5FhRur43k5UiWth17yBu6RXx3dsB5w2iQXG3dBQd",
  "key15": "65rTXTGF5cWTr25LeCkKk9cVLPaFVM5nRbuG7nJ6DQXZLcXskvARnb5NaMK2zPGXawv8DZsLk8XPy22b49GPjLXo",
  "key16": "5FZhEWQ5dSVRgHTZKsn9uM4a6PW9ZJsjqbTFFJYdCAP3kwEjgGBSGDNq9rJqin9hswzfDegxNWtTzp2rR6RrGu2B",
  "key17": "mMAAMNJ5wGuujd8nr9nPAak3PZSLK6dc45fQSBYeR4mzoqLmRfDZBJ3FHJp8R7Yt2RKMQ5kMAnWjWRCET4xXkvi",
  "key18": "33g2bJnph6ptDaDf2kdsajV54dDbAMQqNVUY3KXj97dkAWxq4yv3JbTTFEaDixoBNdXyU7LYCpdzVT8cDqj95RCc",
  "key19": "5wuoYF6EbcVkoEMhrKAHUadp4FATJcRReqJxT4pda2AxsFsDCKTLL9cyrJArTrFEKiJYusa2MUdYpgHAveq3CuHg",
  "key20": "5TfrXDpmksB6P3uFxtaKotRQp1a6xhY8WkXAir7xZNn4dvGBg3LSFFS7KE3vkgC2ECqwh8DnmPRGbAgt2jb8t8Mx",
  "key21": "GTuzxMYdorZPMTzEGxCUvzy7VJK5MnkuoV52EibGtEkbbi54XfmPCHYULWv8PAP4npvKnyHDyfgVVPiZkK2cmJF",
  "key22": "5Mzz6cTu4CxmtA4fY9df91LZpeu5wHGEEi6xivLiJck9dK7J71FqgkKpX8hSNwu81Yg3RT9SWgFB1C2ryCajcjGo",
  "key23": "32FbJ8Vw5MX2FEZhewCZQfAjKAHGGWYBBv3Se3c21SvJdqAqsh8koCSfoxMyirVNrkkHi8N1bmVSavG9s3qxe5rx",
  "key24": "3pob4SjWtwHUZLXw39zYpJXapDcTBUk8b4cdqbCgZ2zKgUKwdTD2MvPEdQaFKA7xZWEBPozyfKCCqwUn7DYpsqs4",
  "key25": "XeaDp5i2Hfjwwi21pfywNbeY4m6bJLhPrcHjSGyjWJnqbhxj4zpkDKYXK54CERpGK1YoQyX3vyTRfw3kcobd9xw",
  "key26": "uEgrPF7JqATYX5PWKHvJiW4MYYnPu1mP4V37yX3dgZq7PZNFwAZ11QgHgJRFQPewLztHwJNbV4BMT57w4be18DL",
  "key27": "2YaJ5ryC6AJ9Uhvdq4Webk7yL87GxLbWapLg6sM8B2xymyTVwc93inYqydX6SadiXHKrigaKABSu3fxTgdM6Qe66",
  "key28": "5fS7cmYcopcmxPkai6xWL8Cm8rut1QrAFagYqn3kgAupTyV1i4sZUrRHcW4P1QdL8JibYAJxiVbrknPKm8ZEmEFe",
  "key29": "4RJQNp565xmRx4xmonARCfwaF35TVMxdjqEJtHzEH1komLLTQgAfycG5SV7GZb6NoMgmY8UqnVyDHKi9sBSSRumf"
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
