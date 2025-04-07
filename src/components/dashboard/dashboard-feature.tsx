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
    "4x6khE6ZEVEPcWR5ThC1ZkZP2CYGfJFpnSHSeEFAZw4i51iMytvBXbxYUn92m8zvGAHDZosSYKqxvULFDNw22K7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "418RGAXVWGH1GfR95ZHy62kGaFpSKSfxLMnY8rnFxYWDEU5CnHtQwUnoBFGuLKuTSevVqjSAAoLE8Lqy9oUCvVEa",
  "key1": "2qqALastVCqwNfas3aD3PPjR7bLTA2EYzPBLojTk89vdH1gyzLZyDirZa88a82CSiDdss1FaWkAygDDZbd5m9JWD",
  "key2": "3ET3AXoCHFsHeWyzdkXRaj8FEGgTNwq6jbGM3zFapM6uCWjRksXnFQJkX8jW7gVyg9v1w5gBmVtSq8kXGZQQknuY",
  "key3": "2vU55uvUL6f7zJnUMnFjSQuGXWQ4LwgYqvwUn9g1GGmtZ5wL3RfqRxiMgwtv1jbQGP6yaADKg8oS24npLGMUqJqP",
  "key4": "uJYHWgvL3V1VMgWxcBcEgZHvmmPY347rd3Aod9Z943EZwS8sgBvsp8qCA55GaVai5JEmCyjZyPmV6ELV7x6NNqP",
  "key5": "3bQCWfdsELdf5Na9A7sjbgZEdopAvKuz6VKCPKfJ9nFqxWhRPX5N2MtXRH6w8mxjLEGLhhs1xeA3kLRRYSs6pmm2",
  "key6": "2g9cyLCdZp5tyPMMa6AXgm8NXmxuqjXvWLxgYDA1boubdwnPiUbaUNroXxt3YXsLxCMzDSUPNpRKGMyD3rw4kmsn",
  "key7": "PK23gndsqMBujawM3w11NvSDG3xMMh3ZUBC6xqdAAxuYQpvChiTZgxZxSPDoutNMxMePfau7b8vKUfB84SeSwMo",
  "key8": "4FpXi2M7wyJMB158kMaMvHz3AyLPusSEhVF6oStyQzzQFUi9H4FChFtJ25y4UA9bxRoJLgPthpp48VZrSXayqX7s",
  "key9": "3uVuW3HKN525iMzLXu73RqWfPXR81FoWrcSupdtZtaYV8RoQNQBExiBSfRsvdbBaJRRuBtca4VuGmPvNkv1Ji9aP",
  "key10": "4xwiyJPko1Bqjnj5QEXwiEXn6m8NNqrcv21J8aBtmTUhhbViTVyqDKHJ3RQ7sU5mHvEyY8VDQ2Q9zXH2N6WUtKpM",
  "key11": "auoL5v9cNjgnUD4svBufaHo3hYj8jiMiKjQMPquDvUXUWNiQZddUSjXTx9wBse1Y6rW9JQ1UkjvAoNepsXKUvsc",
  "key12": "257B8VWHdxmiJBDVF3KaQUUzdVfYBwQKYaabU5rbhkZgL43XToUAM7ERwwHXLQiEwY2f1npQBAgyyLSLhJYAVf25",
  "key13": "352K8FFszBxa5Mimy1hVeruCRkx9gKahmzdAuYwAgosr8Lq1yDKPvfKaHtkWnEYGmYcWj4d6MyyJ1iuoM7kYbDHa",
  "key14": "38k38rJAAS3gvqHMvCvgcdKLvxpZ1nFfsfEaJXiEU2rLQrZVSesM1dfcf7dXBa8Gw4XMDWj4a9B6KGQkumzvpwy9",
  "key15": "3aqvfnYUdejLv6FYFPyxhBrpZucZfzuewooGRrVMpW8F8FKJXss8XZRMVkyqMkS7fRZ4ao6QvctA277KkqcNmVbU",
  "key16": "3GzM72Vk7C8PMWVtqtTfbnPkK83QaweQvebQmLwRdNizWMeHCXafp51x5Y1oyw3aMEAv4QJxCFnkXA8MEGqrGJ5q",
  "key17": "PqHFv1YUGZCGDqBpMt5dwiN7cLvvWyEQV5maDAfhgHJRu41dtaqMToSekFCLLEbWUfNfpnXi2FBPWekN6cbey6y",
  "key18": "4Hbiz9VtEXTseu8MMtLuHf9eFvJvKrs3x4YXbTsMVJnZFoFBJ7WvtC2mPugiMG2pETutiJkwrh7AjhXj2LygFS5W",
  "key19": "5ZypZGJXNjYsr5PbFBYx7g71kPxUvq2rKPkY6sdUiY1dpH2k5So9UWzfq5vK4oGjSphEsbVw2QFuY5ogGDv2JwpB",
  "key20": "iMB2cy4z6d3vPgqy69HBQkNmpym4pknTAEK6sYmCpUgpMBdWjsMbPCNFUQG6HiBCF3K6zLgBQifMbXgXyTjfpEP",
  "key21": "9JRGykCjLYVfDGLn3WYJZHQc9EPaA9NXnJG3PBZ5HiwCUWNqFY5MhVfxH39EteEVX7hNESyuFjEotH3tQJeLWmB",
  "key22": "5dkwyPNu9hCoY3jMT5Qv8tGy88hFKde226eg782YD3GBCiiPk4HRMhrguaK2XP1GAvrjjkzGHWK3Bc4iDnvzK9nb",
  "key23": "3vXMVuCUEcyD1uam3W8w1hLi8NsN2WUyEvrDRBu2bYgDMGbBY7zvg9u9KyRupbE3wttGwpkWuQ2S3HEGLunHabAx",
  "key24": "3eqsij13PhdCoJdoa2j2bzdHF57ry6aFy5y9wxDTxYfmRvRL99jDbchCqiEN4TuzL3mJqxagcyc2GAV9WZ1vJxB7",
  "key25": "3ZXdTNceC2nz8yoX8oH5iQih7oHP77Mf39iny5hmptEcbKuosgLpHNQRrst5xZnUtoBrSaS7ab2Bbm9BLoXz1UfS",
  "key26": "499taZtg9UfERHjshxXQyJADMWrogmJ1rU8j8CwASqRBwQGnhe5CiwrgESd7s9L1LJmDm5Bx9vANqEieppjF8eLX",
  "key27": "2GYBaFj84Z4sbKNddSZKeXWvWHMQaxyk3ZvgKLGQxGiq19ah6r3sXuKzHhcqPSdf8QtyeHNbomghcfRGouQE45R1",
  "key28": "2YegBuKVSszFKxSmEH6zvBmar3qFFGEbbM2FJSC28GFk8oepf5h44gn46LYHfpSRsNLQwxENFnVyeTccghA2NTdn",
  "key29": "3yEqbfZzLvfn3DZTmdLgggoj65NcsCsWDVfGDJGedkxieyeZT8gboPb4LPFU154FjrL39JQNcaYqLQAvd1tt8yXk",
  "key30": "4BZLmRCDSxQpQkUwwwHhAnEk6VHso6H9kFgWBx1YCWbfPFAbUcx68M77EXPaQ8XbSkv62ATWd1YDDDx3dfLmPsCa"
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
