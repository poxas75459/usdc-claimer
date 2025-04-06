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
    "4J7qEx8MmikvJjrQLuX5nFeRn7pa2p3iWUsYoHFTtS1jAUSB7Xq6fj7SojwVDaRZK8hrFcL4RjAKxDsqrcFyrpTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cdz3cNgV7kMATWYu9Vy8kivFPbQhZ5zjdxSPhFRuJoJaFbe5M6fEB1jcEPfnYr8ZttRooGKYRyQ8cNpvPe3FR1v",
  "key1": "atEHsW4eKNvxrE8XrFM3pEJRNTTLPrXU5jK6cCuxs6os1GNTVG42VMhrTrtQvTFMjPTeomY748Bwg92ENW2U7Ma",
  "key2": "5bqAnpKyKWgLLNKkau7G49fRnZjDebbrAL3Eiuz6H6NdwwkqZFLjzytZRgnE8hWAeLFUF979mW43TNpgX1kjArt7",
  "key3": "3LiMeqgVhu27AWavAbFK1Ya8KW1tZq4R3X4JpNX5tPGNxA7RVBqdAc1ZrgcAR9XrmatPMtxUKuALeDuEcMRfrAw4",
  "key4": "2JMY2daA2vfTk1PYMWqSdPqDTvtCXd9ZyLP9FMBtwYJnQZrmweCFtzSU4fTTjvy6CZsCjp4efhf4g8fwAL7qzF6Q",
  "key5": "8cbnjUhrrDyZqWVgC55YxvotNdzTS4qM1JZXrqYY1SEZsMsrAfTvgrDmHuF48m54bQtXHbqWVn2wEXtNZK16Bhb",
  "key6": "48UoNzNjJ8MUNd8L1YLcociq8CTbpgmSFX6DHgQZuLMgKNfaqrvHwWaJt53A34f4srYmc44MjojpMVF8eeMwJ55V",
  "key7": "2Ufs5NBpBJXacmxMrH9xA8wvq6C3uzKABmgvUvxkPwkXCBv6atY3fN8cNBmFZ6TMH1Vd5mPEqzx436U9N75RYTar",
  "key8": "5CfFS9tvMod9aJK3Eec3kdARDJScwWnwXN4474F75Z5S8MM53CQYjcmgpZ8kseXEa2qBAKpvdVuaGYR84RXJGYyD",
  "key9": "3d191TVnwXjoSq84EBvN7hnkmwYm4Xw2yKqHjgGgucMeMbopom34QmAX6tnk46dTuaNzMZ1SpX7kuSgc9DETUucX",
  "key10": "23FdtPcvx7s3K2g4tVhr5b7XeLK5XUHYiSQEBiUSSyTaYJXxwQYo1xshuuJkBxXJxhz1jBqasg2iQdqrgruxXmu7",
  "key11": "3JsDzWP5AapqwoP2hTv6hdPSTx2acDPpwv9dKfzmwDh8GiHUUmREu6PhJyzCeN1ikvJgZk3uo24wUWoLAvL51iPo",
  "key12": "Qpag3mgdVs4RLb9sFbJcLSvLdgyf9Epp4iTGeNX4q2xRuAyS6U2VZwhoozWTyAXrKVdKEUbreVSgVLsRxYQ3QoL",
  "key13": "5efjjEF1bbtatyUtt8fwomwcM4zR7JgQbRvmjuch8iTahpr8GoSA4ify3o3ECkdmQaXEjkZCPEmnjNqiFkQBgWvj",
  "key14": "5vU4HshHmKBL3wkZdFYb1ZXinCndefpC7oB8BqpUiDUHAzJhe9yvYNMNnzBck8hxdKM7REKca12kzQ8BAm1ECFu1",
  "key15": "63xZbv1M1kEPXGqqAmYWwPMYzu1DeayPgdEj6MyBH98VjVcXdGRDzdJDLJWDvkCjtMV3CJWBeR2kLnoC8UHBapJ2",
  "key16": "2jSpn2Bs1ca8EUtjs7NqHTvknDsbjSZJ9HhEy9Y96eYjExotVUa4EDr2iuXpdSAkGEAvGbvfhd9d8bUa4956nWZ6",
  "key17": "2LMnmZK8o5ebgHwpBPAHhE9Ac3kyt4Do8LKqukDmjKyWomyNJwTnh5raqP4AzX9qdbycFMpf9RFVHXb831XBec8j",
  "key18": "qNbzsR84a8dCF2cmYXTDJWpMBs2SjkesZgEdYmJtWFkro6qN7Pp3e6epAEZraWQahMe38wpRB9toYRNUkKjPiUd",
  "key19": "2mSwzvc4U5ehEWW83UBj919xLTDSgmCj3iuAAru89mzKC77QyG7u9k1Uizi3vEJCCpsd8rKY19uzPLycDqbiaURH",
  "key20": "ztmvtgZz3Qca2QTDm3Q6xwjPpuw1ExfXm61CmviAdEDHGTtG4W4G6LawhQfbLk1KX4gMkVeuSTopkJRXeJtU5Gy",
  "key21": "36Ba4AJD1LJc6NPyKcM4jZXPRG9NDEBY7vK9LVnLH72kaQyvSrVhS3HqqSh7gd1rAcP1kDLj44nxiDFZ2s1AADLu",
  "key22": "47yWiy9tvaq3pXKBQmS8f83hTtipaqRSj1a52e6jS2khAfNP1zojFaaZMS2LaHATHB6F4myjgPyhX4TBLdoEifZZ",
  "key23": "3JF1ab5yfQZTXFADdf4Rpi2yRXYKbpdHqUUHJS8UQdypuX2yGwma2uC6QCYB2mUTA7vN8esZHtGSea8TrgitW2sp",
  "key24": "2ND3EYENgabxqHJuCrvW75q2Gi61y1Q6DWMzDQH1tqPiHFC1d1T7z3V9PgyRg9paogRC9vjBn8VSdypRKeqK8itE",
  "key25": "2g8kbjAtBNrzaTCaGLrqJm5T4MhzDMKuLuzLprc13XCvtF3jvfKUHtnwjYi7FnaCBj3iMZP4GSFAvkgrXGRJbk9q",
  "key26": "5GmCfCpvE58nAUxU1cLDxvK8oo3xtBhrwkz7mGKtUin8geddrzyttMEVrcqXHobCNfAywJQ8GWaK6tDAd5zM326q",
  "key27": "UULMZmfwjFXoBn647nT8Nnue4Wa7MCpx5bk45RY9vYpi3tJKdGmL6fDE6EyGEHq96c4dDwnffKXa4eewo8fD2kd"
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
