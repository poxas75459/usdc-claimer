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
    "4imm1aSogYqVB8aurkdkfeBMAcmEtESprs5hNALPestwPunX6NzLFhwFbw1pdX216yv3gyX5C6JoGbDfEvRfCJHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VdPeraVR3hktRPb4t95ZAEyyf9DRDtVdysAnoMN2nJ4pJztCK6JBeo1SBzF52yrBGak26ZQvHD18uN3f2EVNV4u",
  "key1": "33TKjc5WaeuJ36Se3A2Sdy4mHS32ayKUKot2PpYoWnC2ge3KvUo2fjKGVCE35c9aEwKo9m2hnj2co58q2x1WRyqU",
  "key2": "hjopeBD8y9ERNT9rRuSzZeTHt1xXP81rs3GeBJc1CtMRMX27rL1bxRtnwbrzE3AEB9KQ2f3LMXGMH9p34hGePAy",
  "key3": "Ya5xitAaFTgJPtxYrnbq3yvBkaGmUqoAhuPsDYPqNNq6q49qVFNS9SKH4fDSmh13kHYRfpUHzwZmLK9Sf3DiCcY",
  "key4": "4cFDPRhruHnCzhRKkgip8fmpDmRhrUaHGUSUn7DUadkvYvhUrnfCs8DMzQaJBq6Lt1TNUeV8AkqMCnU1ChBxRSNR",
  "key5": "5W696YatPB8HyXd5D1Ep24c5yazrJtVWzV9kts11oe8bKhFgyH93sZ8qs4qiQAHnPRVqG1kBqpmVacSi44gvQAuN",
  "key6": "5yJCc3EHBzWGzvCTTjazNciTE585qdLdQnXKne6h6Dhs4kuf5sxydhyGVYhnrk8aZxpx8SpdPYAJrYd5odgj31J1",
  "key7": "2H9aQNv7Mq1QEJhyTVqqo52FEC2H41oZWCe6DuG8rxV8ZxSfZARMztfqfJxkZxzkRBGZGh3vYdUkur3yA8D2VEbx",
  "key8": "2xMATDVx8kbyqJbDwgS6k9zmQShRvtwc1ntuZKwyYnt3RuKEQRX2KB58BzqdAE9KjsZX3HGcfb5Q9XzVxJhHxmww",
  "key9": "BQLyPxfeX1E4uugxLnocezjVRL1t1moh3w3YJjXRgP1XKkfDSJtjpwcQJzUoFCBDgDJV5f26CeHE2Q3hdKynwuX",
  "key10": "2UwwT9yTPeSgcoJM4shHhwa3ryKS166Nanaenx9LidXCavUMk7uKmV5i2w8efLvjB1i81qfjGXre3Mv9eKBtaK8g",
  "key11": "2zopZeE8snXhCdeWgiJ1Wx67osG8CNUNKBTXEFaZjU8NCeAugjHFHvyRa9NRfLTrexUL5ZnLVRYbuPJZTMVqmyMp",
  "key12": "2tAsPh8eVkiykiNC8kjo9XoZQXHrSQBEWXyKDFmDffmYZt1CXByZ5gJQwY9CeKHHyvcgaFAM1uPGeDfgBVjLXVaN",
  "key13": "3uJg1YXqjbKvUBBbUR9yCJZdeim7M4ybb8KQeD1erngKq1qp2cJdZdrxQbWobTW1SLWtWYEkMQ1GwxqwaBWnUkyp",
  "key14": "4pdnkYhjqmzkvhpceZb7njubanLju9TGswwFj5XA6p5yNUY2sfwLq1iJXuCnXPebhbvVHF9Q3Nnc5nRubXQ3n2Kv",
  "key15": "fCi1jQPaamzsaMjbjwG2bsVrFzUfnof4nDGfgdvkZrXyCwgyQoJXk2Ye7vXoUzW1nrJ1QGEFMxHWNaaCcJ8uvgK",
  "key16": "8pm5ddweiBVMMd7BNn2X9sYFdp9Mk3rFiVPwwNFsJvHwQSipBCm47Zgc2w8uh62iBpCYcaqyruFUjgPMuBGrVyC",
  "key17": "3CMn1SFh8RgxdmFhnUoH2F67wpaor7dQuNJ4o3tKxtkXCj34JFCng3MfomZvQGNUSzt2RjF5crUPcwnbkzYYoNXa",
  "key18": "37b7pDsq7BuTHecgxkQb3RXVgMTufH5AtUrejVK79hQVwqpbtjsnTiJQr32EGqkTA2iCuQjrTSCxrw3P53cVKd6w",
  "key19": "3tH5kfpaeUmguFV4MabxJAA6K7bv86oXyEAMUjDmrYeZnvo3w2Ch2opKDxruvcPX8wpyKAFYAMajVDAPzxy4ja6z",
  "key20": "5BrTaseYvWTv2A5235MZKcjEmmTFjS8R9feLhF52Afgx2ep4x6rpLiKHZ53NAUExQwkGcwsNTaKscikRHpjtbjyj",
  "key21": "4mTFuJTnuDxixTv2wrsua7d4NW7mpLMdPdZDmCBj5biT1GS94ePJPRpe8YMhYd4caANk1ZhYgaach1vgFgaa7ead",
  "key22": "3h63VHYFrWUZfAqbhPKz8iY7PQg4jFoAX15W5B9W1vtnTXker3gTuWBJSJABCEynzb4R4XuFZyquWMbknE4k1ENT",
  "key23": "htihPcKBzBnG7djjcsdQ1hMFMxccDVAv6oXehu46J2SfWF2jjriSLrnNAth7ndhwEHsmbuxyYNiqsTzohbXBnu6",
  "key24": "4ZKZYwK36Cfom7Kjfto3E4tJH7QuhVaAUmXpmM1YDxF1eb8KovBMWor4UgSQK6fY3veQG4DnsTdqjBXFjARYUvL3",
  "key25": "22v25Afav6Qy4e2rtUyaEt7pYMTacTRr4JjyKuWxkbYpbNHAj6RCLFND77YywjHRFgwTvGbSFbJjWkr175dYVagd",
  "key26": "5eFfqAipyU3hudTixMYnTG6zyiFPXZmaqt19vKnnDH68gGCJkJGmVA2r6Bchoj3oSoKLRiVjrSBt4Ebb6iT3nyA5",
  "key27": "3TGENT3yvKtf9zSFM6jm5YTXuwzYAnjFEUFeSaC2vQARZNZpwBoVz6aVcGPWfDArJLTAKKQb8HAR68hrRSyhoUrz",
  "key28": "5Yvu2n1kBjtVV3yiWtkuF5nejHkRDfi4DGNKP6FALBpnCgefyZ4YaYayFYSnXRd8W8vjwG5cvxkFu5hQmvun5zpc",
  "key29": "3jASxx1ysxwMwanCVGKxNsGdY4w2uEmKsB4TrgRqjFHqAft71wCfVuAiYMoUBYVvxrnHBJ1pC9BuWaEorcureRqB",
  "key30": "5sFSg8NMQV5NGUaErBhW7dcES5nqCcnyN52pd2hwEWV1dEGfaLs1PEC7bniVBpL43UMPtANWKU5PmWXbAUF7JMnL"
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
