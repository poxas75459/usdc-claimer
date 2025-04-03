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
    "5z1HWvgQg7b66jgSNBUzzme42Wf5cx8fbY35Laup6BaoUJTfsrDe8NGHmc6PpPYa9EzAa6TUXuPR4QhhCpnPyBrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EaBLskh3tDiVvUZzfjwX9RZ94RcaRxdgNx4hbHHWsEmzvEEXqjBkRKmvWNtB8kYA8qQWuSgRY9Ju4uTbX3HUeuU",
  "key1": "65ij3XXyjGKuG9ywsBjuadMUa4gYLf7r59fewGmnMQCMnqXK3UeEFm1J2ZrE6JYsasv5JJtF2xs8AVwdQ4wJRoQp",
  "key2": "5vVhRqb7iQpBqAqiJTEWsghgDfrLs6Y1RqMUc8BqYoYZvmQco3YwzypYhjUiRkXyDfVobPqwuqLzMj2ysUzpYP29",
  "key3": "24SCm2oc6uBpJER5t9KSTL7isFVJN45CNmGY9VnJpYeWko6wXusLoZU5g25UtCgmhphZ4VyEDmmikzeDWugRY1LA",
  "key4": "4VZR7igLo4wVPTxhjPPRoUJjVdeRzFrZqS8zHybFtLZKmC7JsR2agbfnWBi9qzT42k8GpauzHaUCEZLQ9kLF1MF",
  "key5": "5vrCKfh96njWT9aYKPS5HKwUutPbWvzX2XhRx8KQ48M3Yr9kaUmJxDarqVp2b25qCKN1Q513R4yPwnqgg3hcTZnn",
  "key6": "2MTiHQEMNHCVde7uc3cd7yTPSKcyyzotYkRWcq2F8DjyaYJYhz8U5EybE664fC3Zs5bQsa53SNJLxfLVRUsKihhW",
  "key7": "2cCuryULHvcHNNwQsmHMMmY6CYHr6vjFqTXtyuFrEmxiJWHwmqEk3oQAcUrB4wPUxae8hkf6bWwPokn6MC4dsCCZ",
  "key8": "3P6cgfQkJZEWrZZ5ZuxAtcxeBGR76CLUnfPXzpU9CyJnBK2paeguz4SUatE4wqDRCRLmLK8Z4t8994MdRRwA5iYx",
  "key9": "3yHF3Wgu6bei9hNGPHDVbDWg85xxULS18uWtrkbpDJQzoVd63xTSmBosPLmyeNJe79nXA4XZY8ELcyeKixs3ZChg",
  "key10": "2iqtRDQfCjcQFqoPqxFtwNy47W1ZqG1XTV7Q2USSBtpiAwvZ1C7NDKRzeGePNAEG9sLDYhEDKA4yUwN2LRDesLJo",
  "key11": "27zrkiDXh8ukJxdP4AUhzDyg4yeJN3hvsAkfqVc99wZMyQ5vD64htRmkEHPQx68GMChaaQZ48a18C9jBCQAMUsoH",
  "key12": "3nvEYkKor78G97BwFsdPFnQBxRvtEeLvWPELTFMrwKBLuVh6agF1grqUqZivSnuzkWpPaeMDGoty81oy6ZqUqRB9",
  "key13": "434iwTLDzs1v5q9kcKaFQffCUEYgcNK6csjKyfzpn87X8VW9vQPxvmMnxWGx1rWvGp6XWgdSYhQ8GZXNyGhmvPvM",
  "key14": "3NWFSHDbg8RTVNPe63PhjayhWhJGXbrmvt4sZgEKYPfNbm134ToaX4qD1ehiu2ssCZzFvPARv1g4FHyPGjejJPD1",
  "key15": "W8XGVbvdkPAqKC5ZJN7iDZ6DYE1ZKitpb7qQCmCLLNper2PLgSrn8hvE5k9USarqGJHHGX4GxM2EKmdjH94ZXc6",
  "key16": "2YVz5D9pMjdXCxc9S2KCGTHjfQ7REftsQJ8HY9P5e1ekr485pAuZf6dCzvCKcNdc9r7WjjDrCw8U9NuGbzdx9ch5",
  "key17": "2E8x86ybpBe1LreniJuva2eXdfkmjGSWxtjGjUvS6v8JrHjTZfdPXYaegTu9kHBGtYWJEC7pb9u8nmCng5UTgnXM",
  "key18": "2y7eSWTgC8cYALCwMRMeqE1LbtCoULm76pGYzaQgZocKWdU1x2nV1L3i8MbL4zngeXTNVSKUW1RkVKECc9uVkrRR",
  "key19": "3NRrwTHWNAhBEJPrV51koQ1BTJs3iVHpSqXkzRJcXRof1cgqBVyW4uuQ7PBtRHg2KCtFyvYx9ApRUjiAZ5yddVBD",
  "key20": "2e4FT21R8k1dRbzevijrNrBV1askqF8pAnwPRknGyDJJQLY51eSbYozHqUdyhP3WfT3FGhdchK2bWHrs94AnBFsy",
  "key21": "67GemgiRXWDMMh9WiuE1PejBxgGSd4N4AgjB66EqP6ZELYsPtBidyu4mmvSMyc1NfaeUtJgVfWj4moj8Z5v9zXU7",
  "key22": "21AUCyu7oEY5sXPMpZjRpnw4aGFzBAZPwTLDsp65u9P82c3fBMnzbwNbzopTHKWZkULFX1LSh9ZdJmQTBKixifW1",
  "key23": "2nGFLANpz8yd8thgNhqTMYdstVBVjeupGKMyis1mazih52d1SMfjnReL547ppiB3ptbfyepRfit4L2fWjrydLMuE",
  "key24": "262tad2sp7N2vncP1xVxDPyQG6txdoja9NXwPQ9mvs8yoaKRZeSWPacH7zSQa96NTxputGgAyuPfPLjGDxd83dp8",
  "key25": "4M6FbtkHDbhEfHSFUecdreWcbbsXVZzktBWVFr4eRRcyEDbAHvuDMnSwHcxmShqVdJW1bYiyvdevtwNiR1R3gSY5",
  "key26": "4jgoPrEmZDzWpnJoaobdXmJgGcGirPg3MnMBMsibz4ZibsRnd71TsphbZzbUWcErkfgwn2baKhhTSPs4M9dEwggQ"
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
