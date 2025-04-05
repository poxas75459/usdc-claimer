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
    "2NE2Loo3UVyWshixSdLpUvHE3j5dTWUELKqSrpfTdoT5MdV87n7qtJx894kXXkCpNgcjE173Mf9DegsGi7TwKgjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tc5F1v7ranTyDTeaKeMaEGsTecCCMYohb1AmwpcXGpKJRz1kT16WoVyrUq4K7qXpAKWVVDwjw9r3LHcWwgkTveT",
  "key1": "4PhEb2B3tYLcgisEjXqd4SwJpoikuWokstcPWHhor55fwTHdoYrUG8Ho61krtnHCCCNvvMokwNzUsQMj7mvtcw4C",
  "key2": "4csG4moJ9iLntxRzRH7Bw3kEUYH2UEHsE7A3BRCvdKwPbvpDtRpEgfXmaEWP9gJ4tBX39e9ycPsELohCE3PaNFzA",
  "key3": "2d9qYjRTZbbZaX1Px3QivzaJZ5pGWF1TJpXKEBWPhTgbjxrSSCRUnMYU8tT1PpseJNGdqF3KCtGKy3SnqRFvo4ze",
  "key4": "2gHm7wibKyTQrrq45eNqrwkKKoEDhTneHW59Cic1exc6pJbVjpgwjJPrW2i6FNSGkxJ9J1pZphGB1H8aCBaZkcPc",
  "key5": "xZpZa96bw2qocbPW11XNG5uZ6wHWqAPiTV8zxRQXqHxJnibGpBLFcSpojZuQ9BDsxveKyrGZGMNx834aqHvBfdw",
  "key6": "5Pkm2uVNMLnVsUw4ZxcPCt5iWsRGRc1oCgyegfDRrg8SNKmFifGnGjbs7DDjG6V16G6PmtKYCM3qadMhQatfLcDf",
  "key7": "4zgZYX4hL6A5xixJcpEa3Bkva7JTuM87eFaV4UpS2UYQ9u9eG8EgUBjiDZWBmZPfWKEtNuu8SGqMfdchByUj9wYJ",
  "key8": "33SY9mysuqXLcmgNdpbcJKH9nRAAjLw4mEnH3pSbqnUKwLou5Fvrchrd2EZgTTPwdQyYJfo3uD9j43KarFpjxx1u",
  "key9": "2ULqmYM8kN9mWzP6PgjVKQUSnQsq6nzb6dkzZtVkW7SWdvEpXPYBGjjDwNR1V4MCHqFR4vaJiyWRa6gRMFwT6U61",
  "key10": "2s51bgg1uhBjs3S5SuYFxkKw9WsbcR5wJU9nxbrrUdDcrQm8sW8Nzd4c9UB9T1u2wzqeFaex5GWdd5jukjKWFpMH",
  "key11": "3LTH8gQ48ZnGCeXynjyxN8yJ6D6Dw6ctt9TG2XZbmrFXSP5Dw3mSVyhe6y4vsnAaTXvBrfwWFMtmfEZ5tzLSz9KM",
  "key12": "5HvRUhW3qsZkvYwHujFbshbmCx3ezcX6WjZAcYji7fcu9z1eZmHkXX8RRxfUPufBx7R3m3io85AXquRoeLZqeTeA",
  "key13": "U5k942CLFpdCV2VUWHHK8Lz4EYh6PbAsqv2fKC2Xg5xWFEsgnUQFbbUXFftypDLJ6iuR3L2qm8V7BZCJnmHHEQY",
  "key14": "3EtqPr5rXiZfXPVUFx8EFamCekg2YZuQffjwGx1YgpECyuYzP3HcNqTw9Bu9whdaMb8UBLMM44VGV8P89KpbxuJ3",
  "key15": "bNVEEnhSaRAtjxGJfMAPTujgYmPt4uiWfSW6fcbhiWiNe1n1zfcczSRTWAsYm8185snC9ngg7smPBzsEAHY5Fs4",
  "key16": "5HTu89gNzx2YRrCHTPioqqfYT2Tp7RSvo8rFibi3X6Tzxd6iNGrV8b38bkZrwNytJb6C6nGwaVd8H9WZ7P86qpWX",
  "key17": "337zYzXyEtRMGGMz7CPFG9UC54LHbdqoh49XAk3LJFvJVqCrDcqgaRB5vzKDMejxtqbGycA6TX5B7SNF8hdfFgn",
  "key18": "VckUDawSamjdqHUHJDZLfEBiN1rHXAFUP5KpDjhY65PWKAqXabqK2RG4VWU5nvmsc43vwJfpivc1jDQvzJYfbrv",
  "key19": "558SKdyhe6G2L9Ef4zfSsaqypThJaYyQXcuCp1Pn6y1nADT6Rc2eCyLeYNWGn41BjLSuyZYiZG59ffKRkwXaKKr2",
  "key20": "2k3FBygvX23WbAD7yuisDMtXgkRPjaw2Th8AtaQ8GwqCnRgKWgFxvQ7xdi18dMvVUebHvuCXrnTZkZ6U7cjMetgw",
  "key21": "2DvmFrG9en4sSXYFE1ZpX5EYeE2WBJ2ZZo8MzGoVDer2jQKr6eoQMtsxAiPrCSgeRej4eLE5QDUF5WDjAdtMZ31Y",
  "key22": "5iBdziu6FTkX3Zt2saq3MTstQe7ux8b1sVsqTtLXxyvXa2AzZgGo47BzBmX2Ce3gnEeBV9wGuG4Bcgy8JReKZA5F",
  "key23": "mqAajRwPGAzYoS6gApBTRTR4pKSSyY6GoTiVJXAweEn8TLhs3UNdZdTw2Azaj5duargGX4BgGKNLREKonLMyz6P",
  "key24": "3ZM4NDzKwfnepavtZuqb7c6z3EVi5EhPJ9tuBKP7JWgbAjgxp94T6BmRuKP36oJiGpmTCAhBTZvkSeCqHRzGBZNt",
  "key25": "4Ht9XzP42AzYsu2xd8cx83hni437V8kp1H6ZFErpEH4VQghQA5vGSob53iapj2B2rjx8HZmbajJzxhWH4iXvQnq6",
  "key26": "4NmhvYzVMrtV6LygJieFw2WD4Pm31fLY5C4ZHE3axwa7av1qsmdWQ9hpGEvQmrZEEQYPivREewidPpdGdsT5Yz1q",
  "key27": "4HukEGL9go27etckb5w4eDa9HakG1qyCXFRsAcucQgpMYbzW2x7dvhD1rx7jiCWDTEc5j8khs8gmTyanVwMvbNEa",
  "key28": "2L5BQhsZ7WHUfxCfak7Rg2w3JfXnBemWKsstTxuFSBLkY4kkw7eGZ9gCwf44LbkXuS4UfrDsJPP66oCyrqBn3ayz",
  "key29": "4n4AtsgbXa7Zkgd7ZVgGSUZacn2KRSVKa1oZduTFviWHHDNqj31CsZSGb6ZifyL5DZ5R7k6ANFK3wGcurvCf32Th",
  "key30": "4mU91iJxHvK1VGTUgzTVzUdmrC6M7wL4skq3u2kBSXRxhSgnQuCjEVcDReTMnHGg1YvnpkoCKS3cJKFyu5akZ4nb",
  "key31": "21TgsUKjLN2sJs11ZW9dY6yVBt6ozkczYbJcR1CPSrHhyCyBf9iy2p7wsH5qCFVj4ECMnFkhGco64PamCraJc7D2"
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
