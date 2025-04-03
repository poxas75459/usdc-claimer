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
    "5a7VszWwukjcz1nqZH7DAgHyfwhbCwxy2n9Y57xZm9VuSjM644Jfx7bVjg6jBQ2BwS4pshetanrNSF9B3238y2tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKcBNKHDpZ6oGAAWeCkoWvZ2yGyUgqZR3t947KnyLzfBBu2cPoH6JPnzhVHFE2DdPoHCEjQbvtQPtZo6oTT27QF",
  "key1": "8gXtqxpiHgQ5Zd8nzeDvzqbJwjThcXA8RkZAf6kdiAbPKSuWcXL3jiQbgn8J7wNLCudbHwL2x8JQ37FsNZBBqp2",
  "key2": "4bPtLyk4pUBcVrqEpXsTdGdqSniSoH7cGQZmEQxvyRE2Jos4FQmUBVcSsSzmepSzVrvJvLNbqf6BxTg852TMiKie",
  "key3": "4oEKAJSSn3vN4heuQwnFnzpXG7EudNALdj9Jxq5A2gjmURSqLZgtU3AxZtrWSsz4uVQVWWCfsksiqmR44xAE3S9P",
  "key4": "5pD2fURmzhdFca5GYAyxrZCPbnCKAJbdm3g7g9BJFoo5PtkjgUpLjwbpF9WUR2Bb2oA2pCGEszbALUTxfmkC3YEF",
  "key5": "u4t3rWbS5F3M5spPr1nEm7uQSHrGzbtASNg6rZ5w1y69KpJqiunSdfQf9ioAoofZVioUDFCnuQzgLsMUQKWfAyu",
  "key6": "5PULSKKMgdFvXqnneNYZnRZLkLpDHhBSYx2eRhZWdSDKEFoRs5vtDwGq7K1Nbrjjw1ch83cjAuNoGqttNKokcfxg",
  "key7": "2CdBEjbHUBmRpZ9wGi7kNuWq5q5mQHp7Cp7yYYtA9PpVsJ7zwJisRS2Bgtg8BcCqaNYqGJajupg9KnRZ7R8g6NL1",
  "key8": "4SFyxJd32rd5SXm4kavxz5DKiZskyYKMS5YXqMz2xa9pE9uxcoXbLhpXoaWK16MWLsNoeYvByqhqPK7A11VWnMd4",
  "key9": "Yvz2nGn2PTrvdndK3Matt9Hw4EiQSoqDAwstxfVHcAhiubyGkcEPnH1pXUM8FmP6nVrVRnAUq4CULT8honJrp9S",
  "key10": "2fcM5cDELttwQFGRTk99CF1WLdZxVgnqSp7dmepCHMs8qe6LQ2V48pHUGJciMcBUzWWon6wC2uc1xm6e8AG5RkSa",
  "key11": "2awUy3jLs3r9LLZE8asN5rpStce1c4qV5AvQmhw8dmbgPNj9AJq1eWqEAAcAtnpga6CvGK66WgW2W35f3CesYkQB",
  "key12": "52zvvnRiZNFM9Ux6zPkkPF9bFmr9Q1UauPtC2BUDUPU59ZVsUuT9T5THBL9ad2M5xecm2ZjSBxxhbsTVCs3k5S21",
  "key13": "394AUGtK2zjdKWK5xhBy3EmPLU33ySyJ8s1NXCaW8MqXqz1XfSeuneo6zt2SswcFUU2hadk4ATSQeEd1MM4YVN5J",
  "key14": "3rJtdpqotmCRZgRZ4VPbkwSamJTiaCYfx4oiU72TNsH2vYSo9FGDGi8uW3hiiXE9UxRn8jZi3D5QEUWNa19kNU5f",
  "key15": "2K1KquDgPvsovQTMaMabj4zXyvhGEjhgBMVUMKtzYu5Z9eUjs9JN7LMJ3CHEktkk7necGcqGF57VmVaAVg62B94h",
  "key16": "53JVPhohmzjbhC8scbJnhjPGJjHwvEmY2NAjiqCC5dZGtguCziiN7snQ8uxrWsoWjED4zGQ8VKGtbdcqiCo8eMXe",
  "key17": "4cMeiWWgtxgUZpYheQUXNkpqWMmd9B33ZLWtqUQM8tzXBGgYhWKDBpCCGeR894oFw3shMNZBa8HqV1vKZ36bMmeY",
  "key18": "332SkkMHpkXotHiwUN7tejNAkGXfkEZ1muSs9ckMEnYrkBwdtF2mPkmCA2LaM8Z62dZVkBdjmF28ieqBiQPEc3ki",
  "key19": "5LLUDPrQ5RyCcEyehccms9rtQ6u6KCbua9AqUoGN9S4VNifkAqeXC6ufXuafn5fKFFAEizrqx3hZpjoUREBjot16",
  "key20": "63pcoHSZHwJamdQPpfdABJ8xcsiX7z2Bbg934sESs3jNTDqEgcUHzcGxgsLPhmXXxmP4d1sBDCiCYYXXU6EPWka7",
  "key21": "4FCuffHJCR1318i6APPqZn2NN4ki4SVY4PFZBjf4Bi11xmNJgXw2Z5J6sddw9C2dbLJY5dZ7M7RVzMSjz9zDC5c",
  "key22": "9Vk9W2V3nb72RentVX1Z6fwCRKU8F3u16cc5xHknVb3MaYHxVM3nVEAFqDtRaUrztwcWG6hNKVLjL1ZBPMSeoG9",
  "key23": "2FxWQjt6fcJeNSWrSBVk4mH2N5hrtY4EuUVMMG1n2FBW2TnN344pYsFP4XZX5j7LUXCDzga1az1WzCvTm6QxVonB",
  "key24": "yroqK2PUw1QvGXbs2gPC22Ab5cVDAR4rwtuF3kPGhE6Gs8SbY7HyN38f8tPQrsiLoVa1PzxTeNxwqukRs6tFuSM",
  "key25": "p4nGfi8JAYh3XC5VFwwywLHt19fhbh48Tt1Ex6UL79GbX444AxafLx7YeMFwqfGQz3Hy4S5iwt56WJ3a9r4PKom",
  "key26": "3bKdN1Jpks6UevRmkBjuafxLzx41ha1ppmXWtSGB2rsSN2a7MrvgxBusxcZ9EsaJMExMdbgtGAm4d7WhM2Yeh5Bz",
  "key27": "3wieMASdycZBGMa8H9PFMmqEpKDhK5LH8dFuPt7x2uf535YhBRK4MKFKDNLd4tywdCp8HWAb77Tq5XTdm6J3HBh2",
  "key28": "23zvhGSjuaZNrkDv4J3abuXVVgPZwJm7g3EoPhenF9ZoGn7nLDAf2VL1q6KXX4jqfDAV5ALAitETNc7Lk1zb6PK3",
  "key29": "WNx4w5ZcgxsH1hE9aw6FFVzYrAskioGCsgRvJxXkd54eoepcwn2Zg1gveE5NBfoL4AjUeZdWGAxvFh3F6GU9538"
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
