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
    "2rGXZAt7ZUptHnMiXmnvMFtdCbh5K9cw3E9kguXDKMTH1bqrBm2si5Kxr83628G1SgUVYuUubKVC1GYtGbbBkBZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44CJBwqcdoPhYhPZj23ZiTKpR1Sid8cCxqciYcV3seiTRn8viZf7nP1N2Mhk3dm7L9bfPVZuBvBbJaXTagsJi3Mf",
  "key1": "3VfDABGJh9PnsJo9inqeLMuCn5TbN1maMfYf6LvMhRBvQWtNU3pJ1QrCKauNCtRHR5TNcaqMqT5NCFuZX6gSuzqD",
  "key2": "2CNQTSBj7cme1mzLzJAoS8gMYpmifiNNd32dvNJ2SbFarwx3DJYQXYiJC15nMabohd72jmvBbXPeGjdopGHQYnYF",
  "key3": "4fXkUAwb7NpFLbqijZXTCtCjkn6rZ5GCj59HcUb1oiRhiwREHjmMaXsCpU44PKP6c8wm2TAmWETx8F5nqwuZNXkF",
  "key4": "3FtMj27gXTWWvP2sySYqHgSS9TRHUUEuovAmDGXcgsfZDqCZfQHVQWtygSJA7zwDxDLNUhT3eNr2vP8w67k7VTAF",
  "key5": "CvhUdDA2BM6gvXZznstmkCEKaAx87iMq3uGAAE5jsVTSERawxEeWWgWg4RafppN16WjNw3aEfQpHxFayor8RYKX",
  "key6": "3pXxKYebSAyFc7oZeLzZXWj1ZSRca2E48GPNo2gfLds5PyXXf6kJ15DdxK26gmWdtSf8UJ1FaAFEq2SKLvzxvHUW",
  "key7": "5SvUPrTnRKZFFpr27Ko4hXkNJs3jnHvEkkfoFrnDqig1DCjHWQbBKkZesSWvoXLTmxt2ahfJhSzLEnRBGEUJLiPL",
  "key8": "5cfLBUaH9C7nUc1jbsuuVusvTQJWMJRycnpcYVZRaagJ9rXfoyDqkmh7fjyHsjXvzy17ppeoHrYrsabBERmJ4sY9",
  "key9": "4cTR6JUawVsscW2RAUsuhtgZ75xYctwZxZw8rViH95TthcEDPbp1B6htNE8pkwM6KofuycyRhrVezVE8Tf3Fs5S3",
  "key10": "291HX4xtH7NHGwjdAJUZLWyoW2ZuE98yEvUABujoRN86qwSWdXWHh36EnhwpXSFFAWBzg1UENqc8ouyuexGJicgV",
  "key11": "5HUMNDKFTydfDGgSH6PeynmwFzN6G93fA8gixHJpCkP2YFVSeMWS2kJvvo7rfvUqpnWG6XsuCnXXUzXUUkbt437H",
  "key12": "nCbRZ7KS1vzbkVmM9G5BqFCSjCPYNrfE1dsnb9CYt86jgPVWDt4GJrS8VdsrHdJkWwzhmqqbDb5eN3jn6F7cBTf",
  "key13": "4Md7e3FKmt5pHkiwC8w5opEBCJLX7aC2L9VGv2ex59tNyxryXyBPB2etSMyVvBoNcAh4B92hLeJvy3p4ufKmtUf3",
  "key14": "n5GEcLiRPmpkMcJYsdwCRztdwd7FM1pjRqRwfQUN58HsZZLr8qbAbJqbxuVkVKzJkAs8kBvf13mT1xEwEVrhtmS",
  "key15": "5gMiHBkbvdoB9u7SPn8JSwveRgEzerc5vCezvVDGEYaGk57NdbRndKW93i9yYmQAQU8yP7XT3SGZNEBcphXeQUNd",
  "key16": "5cAUR8wGqbBTfmgNQiisbTnEDHfJQYWPnmubexyNKFfnLQpphi4xbwSviqdbnFjbXewrsqU7Luo4KgzZRwTaxmBq",
  "key17": "35LxmU75x5kQFBNJhXGJHu2t2o1kBjZ5DZYgTRJiw5JUnj7ZEUQNir18YM9kiboMQnbYw2ELgbYgPZvCyNFXMA2g",
  "key18": "5jzHDD9ZbrjE1WrM5cEGRwoSWaRWL8gbgrkgbBJRXDGGoefmHRYenAif74KD3ZtuPDTTGyBzrGjpznnUmsFpD7GG",
  "key19": "2nj2EGJiZuroy6mgHzycbizUCQNRe1j4fQVZtoFDbAvgie6XbZoNBMRjgV4vcKY8xGkresBQ1deZ6YJaxs3Dd5Dp",
  "key20": "GMGyKGjp7hcS5pGPV5cjCgVdyZRsSGW2Q1DG2hpLYWGAV6vd2KGLpdJ3krGXijQkbztZHtVi2DgUJLWTd9G9S95",
  "key21": "KtcUQ9n9JNpsepA1FWbSFjbNnBfzm3MTxBHZLtuMp8K695VPZ4eUHsyH9ASdJUnZCWwd8qn5bnxWeVdYbKJ5wcy",
  "key22": "3aeXE3nPhxoEidhoUPcMi3xrKnZMnidNrsH66DSFFP5VDMYUUDSkA1LTfmhVQcKTGURJeUqKDSDf2N858eJkWWYS",
  "key23": "raU11pPkX72MrbLAVpgT94KmNf2VzrjrwNBkQhuja2iNDgcL2mCUC4jVbMWkN4e3aRkhPP7TiGfYYeXb6SLE4WE",
  "key24": "5dMAW3jjrUHkCkhjf8DnWg2fuxYTTn2ucr51Tphp5jBxe4P9Tb4XCTQtmjMfsBk33GoV5twCa2DjNxis9xE91iN5",
  "key25": "2pSZDwS7iVaVnMRJp5bVqn4NuC2TDYfrFNjDdNZ2tin5YNJzAdUx9CSEjpSMMzQudvQC1qDLYfUxrhUYnfBCvfXM",
  "key26": "2Z75ewGssRfC6u3MH8JrFWexV4fZr16XVDmsGLNRiiheDXuapcDZYGu9qJB1dcHTviurLRbMdZwrTAS5webWrLZ2",
  "key27": "rZqefreCM2uD8YrvjsND8dwZMkYH8tHJRDwofvy8s2qVPauu1LRsY6fXiVnUngGNy9fFWVSvLj9QWTPWjtDA4nx",
  "key28": "3fFcNSYjRpJiGHC8YfqrYUA2Dgqm59oiDfYRqtkHyAxqe3xy5BCTbJwf2CmYGSwG46wxLdSFYQoCjnR6mGWNKhPX",
  "key29": "2wta9issY3BEaTCxHfdPCpaxYkQ7szHSBybmCH7Tefb7LMwNmMnhirkZCuq9mQUxTgeAWsoYy1FDkr92n8wu2Mzm",
  "key30": "2fBez2BBYRjtBWoKFP4bAQJQZ1j6fTpMMAMNNmWTahCGcGg1GHzGKMa9UTyXVTtVheHXYHwab8Z6MPwf4BHXsd48",
  "key31": "59spFtKcrL1757HQYwwwngFkrm8Ajki6vHkvhay2hHpYFbY5KjtjsbkPHV3zN5odaSBeRYghJArUEC7QDYrBr6tV",
  "key32": "tyPdmsGtCbgETG9geDrtDUofcg9WqyYbPaX8yEu2WierJhEtxpJYHKP2MBLsw1wT3AvfLuK7pqdqXtmCt5gDHKg",
  "key33": "3UUdgN8nv1cgbeS6ydL7bUAkxcDAj2CtJf2HnZMDGfrCjK2kdN9b1CLZrW9yBoWJmdZywgcMsKwpwUToqMmJiHBj",
  "key34": "6odYGb5p5yQqPtZLssLK72J1hqcoicsyrq59PuBAYtbiCrBKrEQ8VAdCXSTpa4yLu8cU7Nez8SsBpr3CV4fkmv1"
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
