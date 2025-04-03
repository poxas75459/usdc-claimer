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
    "3TPvi6DezBTybHmqXKCJwrnCaJSjpg2K3suvPC2cPZiJPPgUFFjj7SmVCFAJXUFknAwdA37149H5fud89PnnzFB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7dcDnkYWJ1V4ZCgJvTfWja9BXjGWi5P1JEod4k8rk71xFm8ipQU1FgS6wNWR5XSpbmfdaSTTJ5LY2EgcdRckYc",
  "key1": "5g7DmDpc2CKxT295Aef37nHPrBDxLahzjNb34GF58tVDMjCBxxKvTav2HexGE3ukzdgqJmSCnHTCg9cAknDUpYFg",
  "key2": "5FD76Hq7Xsa4dACm6SrQo393PDNB9jf3pN2GWAeUZF1bwbtQL7LKR8rY1RhyTM933hgENiq2WhQH8ox3MAiM6BRF",
  "key3": "5zYRAUeB8wfqJNQbzoaBrHeUwZCkJsvRTrBQKF1Ty6efrWCkDPM864RkaBF1cFG8qHB46U3hJP3j1upFM5GiXE6S",
  "key4": "2gDdTfxWL4yQ4nr8FSKWiwAn4pNESEdUdiEeUPjy7BZKH1uXaWeWUFy7oF4F3ESzsS9nPHdQg2ibBc3QF3CFS4Un",
  "key5": "q79senzpo3vCgBHGo3Y2xMqgzQandz7KWZqekPEnfVskq6bK2nVNL47rDdVaBBsKahwQPeR1oDTpKtzTCmsNHZ9",
  "key6": "4Cs3pbzAdmojrJaAuysyz1MzSGY8kUcmJPE8WcVg3LccWctenS3SwrSHcZPdWdaJrHYFP7iHEvdPqeHQNt7rPWng",
  "key7": "3hmwz6EQsb452p5Cpzzg866iXzCJueXEcbqPokQkiw61vZW2QDJgwKrqo8iAMLzEFeSWrtY8RYKtGH7kmv2735iB",
  "key8": "5wkw65iXky3cQECjgBQzXwASvr9DZ48ifbtBaTHmnHGNaX5umm2Tfsv7T2xXPQhfg61FnBm8LrWMkxYrxsLkLxRK",
  "key9": "3ZY9xyZ5Z2i4CXpgtzNp1aTmHz29u2rp1hmHHfBgB4wEFTkkwiywvfrF7YpjBhnQqEgsAEyfNDR6bjEFTRARKyn4",
  "key10": "5ggRRjSGW5p5uFN5dAQ8yrtXW79DhyukskmN4mHExvAiYtKz1qf2Bj2htm7KPZmY1GKB2Q2jNs51d7mjJST97q7L",
  "key11": "3n2BJcFo7ehZHNPLkjUAUBioazqVqKHtyW2pgjmN7AUjj4F8exWhFU46cnRWUPDQF8Ts6A9sbYAyNcfuMA1xu7hn",
  "key12": "s5cKDraMXqfec3r3DHYwNGoc4aMkwVgcw71HrkJ2J55eKUF9tfw8mmSGa8noZypgGumVQ5aUkKGA6jh6DFpN45a",
  "key13": "3Mf9XP1iNWwsS7XsZxB8UWS5cPWUZCRcja2Rki8cfWp2wMjzP29DTeyKgWmT1UcP6MzwqAL4k7obDd1g1FsVSME8",
  "key14": "5HCokQmCmjmGQz9fq31pwrcoeYETbz8u4321L3Q35B8PcbeFR7617oEikg3A8RuBGtSsmn4wEixwHn17pTdsiJSj",
  "key15": "4GC5Er4maBeJtf4zhpLf865sAqDBGcEEmRKzoEr5JZSK2Zv3rXf53vB6c6BvTEAhar3QTZ5zNnpQFTB4cbREcuZe",
  "key16": "Ct2jBarZiJZAbaZCLVp3ykfx5a8sCwjrvFuX8zGUvJft52CJh699KHF958MZoBiw4Fv6yMZKv66VFxuGJABaqZr",
  "key17": "2KE5mkm5sJkRwZuCtCMyM3ayjJ7Wyxdi7MuhBwFQnoXcvhBfx8rvqEiiuMM8Ddh6BXQLDSMZJmh6rT1dp9j6yjtx",
  "key18": "x123Kb4djjeRXnpHRE9fBChQYvKwEqDSH64Mwy59r2L3e5DZTaCvjVToruaf8A6BvY3GLdW6TQ9BykRX6Tt5oDv",
  "key19": "3Zo4VTHVRArVTDm3BHqZLoBaXDiLnXr8bhDNbjm98j5ZVxKn92LaqQtoztYc11JgLG6QaoeMqBPovcJu3mvVCtrn",
  "key20": "5Lz35tX6pXMqm7ShupEXQmPRhDyFNueKS1XiDdLGudxxVkzWJQfQNA933yCdh5MkqoMtVo2DAzpccZMpcEMFNvVk",
  "key21": "33cfG9qZPrMRfk8xFWpcxefg8tQkhCKyQLuWXzgBzKf4Jikti5m15ESAi7yS7EbxuayK5f7ZhFUyW1zL4ref2MPR",
  "key22": "2qDKv7j9CzEDNnCJyN9vRqo1VNGDHNGYTQwxi6zNvZr9g56vVPKfYjLPyoPTUDxGQinfJmBNNzXzyBWgY8HBD4b8",
  "key23": "5rHzL6E9yAFFnpJZgUmvEnnBEySNx5NAZkeNgQUwCiUzDSSZiWaipFxGND1Rv7Vf4HF1uQTeAjD6mAqrKvR5PhVs",
  "key24": "2nQePMCaKxuWLGRXK9Mw7DSTyDW7mbYeih1jAa3ekZ7giHJJStcULR4pBFnL1JNzSKdhbtB83Tm9P9cwfyZRpybf",
  "key25": "2FcXm2nJ6KCCDKTHyzrhon4ucNe7JsS2EMBVV5PkTqLnsyostggezVAFFgLT8BiHKWcpfX9H3jdJ2sWmH3FEpERS",
  "key26": "2ydsWoULCSTrrUxnM55DgymdJP6YfhEzkjP1rU8yFJRPn9eaYT2fHxGqbnChKdXBFfDsKyWBj5rUrRv5idNFDtvi",
  "key27": "r2oGWWhwoHBgxAPZmR2EtVNgwaztNXUbarwjy2CSQiPLSHzvvg7go2wTfeivSFVZwnzSkf5NqUXBKwe1aodoPMo",
  "key28": "2dduiBqVN1DQGwzaDoLCDivtqqBf2opz1Z31u2M2r39aSPiNQGpK8Rc9ujwqoPYZ5mgeTzJvMYyGdXEa8XuUBCWi",
  "key29": "2xKYn3MXXY1wtW9a4DKnvRY846zhSqJiMtS8VxwJTAfCHTq558nfrw1G1mscCrsMAX84CqH1JbFML965XsNU4Bm3",
  "key30": "sYqSkVUjUTsdFmEWnKSQcM1WaAfrgSNSaGHHcokmKmZGdnDpNAbot5YKoPyKr9CThaGTxoYs3cgZLXHywRgU6rD",
  "key31": "27Ho6HtAWzcAErSTw33CnYauwtbGvV7z8GYwrDc6tZfNa1SURsQymFcNcyn3Qq5ipzD4jTFsACBiHLAcCYg4Tq85",
  "key32": "5Ef1J9NvAHBy3x6pH4UgE1vfGB65fktUTCEqXajAVcfNce2m2BJNM6LBZd1eetuyt4Qtkn9sRbj5rtq2KV7mp6em",
  "key33": "44bxQ7kzDs3NaVBRbcTV3UvWCJCjQQwvS96M6pEMff57UvDD1gxKyKufJqd3hYMgK8wJraD31X8HoUC7owFoGGDq",
  "key34": "5GYP1uvtewYv268bb5GscdFPgrbL1F6UdZSRU6miNQYVH7CmKVes95opDQbKrZue7syhJ3QBR8KbXNby64HrA5C7"
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
