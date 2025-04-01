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
    "2VBBrk5M39XUB7F5sUr2GWVuG5mdDMr4pFWYexBXxAqWWnZcYstmGfTYSPEZpgbiTHuNZEAvfVnRKWQZi2fSgTEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AobFgC7cJwwdvLW5VDn4uZXY1CRrz3mtDrVVGoCMcSWosqxrFHn2CQ5avX6ZW4UHTaEKagqaKQ8jrMm3zJE6BWv",
  "key1": "3aDrBadgqtmrSt8eNmWUBhBzavd7GA1DXPZLNJGvpHQH8sXjALB72XnhBRryoG4g42rYXLHCHYxv9QpXo3B3wvxD",
  "key2": "4Y8kPJkhxyaxb1GeU1Rg2jCkdibhCKjVYKeYC2ZjkgHsiAqjYAb3nGrtkc8eJRuS1cHTyTVUvXoMervXKgo9iLJ7",
  "key3": "46oKfD9omjgJmimmbQRFbJBegbrxqrnVKdLXo9k8DMUBZHioQ1HHiDhaL7Ca5UEwhBr6TV41mewK3C5v6WVb5ru1",
  "key4": "7dUq5J5oTAt4K9Mqxh6cgUFU7rvBPNBzdCpPGokqfYY373XCaTCHqqxbctPYieC3rMvTUp9K2m5ehvbLm9qEa9S",
  "key5": "3x9MFT5yaff78PPnDgb7kwUqWrZAXk7pW9b1kRPY67AhCHFqzMTyenR8ahR9AVCBkn1hBREay7NGe5Yfjrgiobhn",
  "key6": "2PtwfQVdTPJZXF9esLTZFahQurgj9hjHt6CY4uFBqTX1znwBzxp4Ux2aZ4S5C8UjCFsnrRDrWay3QeTm9CQ6wsiy",
  "key7": "3jXocoAu8bwoCuzafYtUy8tLVz1phyf65M1qGvNHp4voYVc6gvyF1fCAmVnyfWnHkSRt8gWHnirNQSVtj3tG2aSp",
  "key8": "4tS9e5DHGbiX3GtCv4x7KxDdBgtfArqd9SPxJ8cN6UzWh3UKZsiEGwCadeE4b2uwc9paFUeXJZKNWnzKsFu1xnwz",
  "key9": "3nodpZDY5rgBZbGwWn27siAsF3GsaK8f5wGLqUqdJqmPAWatiQYsC6dgdMq2j79hj421r7Re7qDDwdfRQXR9aPrQ",
  "key10": "63KufSeA4HP7WMewJJuMhki2Zkpcw6mPhdmLT8tk6pJCiLTj7f78o2Hp8HpBiy3T2NPxsvKZ4jW7veVzGpnW37Fc",
  "key11": "5y4L5fKMJ6jjSNZ35YC6LgPjEnPSTwQhuQQWTKx9nyrd9V41Fcxxc6jSWMRB7qkQkUToG3pM5dtLMR8HXKAhZE6Y",
  "key12": "2JQJkvu6WhtUdwrMytwaRomu9M9MHzcE9P9RENdMhq7ACp9gpCyYWqyiy8HZnrAZB2vWexQqRsFNkYqEncoMWPiG",
  "key13": "3gu9cMYE8W5oMK7x3juqnthfBqLwVkesdxruCjemDJC2Av7wF24h7pyRzhaFZxGCH2aVKM5b6BXpvbccv6zNep5c",
  "key14": "5EiBMjSnda5rEzjxtvJLBrcUCBqzaoYCaTrpJ9F3ZdU1MsmkMYMqeWavM11VkECh1aG3W8Snh3UHhbQiHHptfyAt",
  "key15": "5vrVC7RRnDT1F43o43HpvMvRpztB7q4x1pL2B7FPCPp1WSKPtY6T3xRJAGaBDUoxkvKcGiPvsbkGuDXVk38ZU2WV",
  "key16": "2hcZxvDAamXyYGky9y7Gx4D1SJxqBA4FL5kF3cVGsnzizUkjuNikbEtVcmeFmN7xU3WTU8xtCDvSNdWyiVXCvqqq",
  "key17": "3dKxGAuh7rUfaQLQ3CiqkzK3h5LLTZwZxr5Um26VVc7VCqXZMNNxtB3A9QPuRVp3AX8ctMZkXnJnzrnrJCnD9oSy",
  "key18": "3Y2D9U8N4CQ4u3cdHgWnZjC7KN16LUkrxawYSzceUV3GYMWCV2NG7iQ7ruje4uoK9Py7ReTFE34fgLmziBti8oAE",
  "key19": "3smR2wJhmxfXuUrBX6ekQEGSMfSDX4pLtMockvZNqxxPJDVzxH2gpHGJvqUGpvQDgyW3wUc9TafAEfNGWUqFXkJW",
  "key20": "3oKWNsVnqKYDR4PmQ3UZw6MxNPPT96ZZrRoLk3SaLz81MBx6a96cdm6TAehUTpcv9D3EhMFryosTVbQR5vUuC5oE",
  "key21": "4bKMVAdTAc5MRyeCJ9mHv1JvQEjqBKKoENSiWT2714GZXsB3Nzg6h2EvEWzni5MwbzvnZ3XZCZmodZkK3dZK2syc",
  "key22": "44yGTqf16aehtpGKnPcHJmAhTSBpRWfy9EMeUhWY7pCHTWSw6quLxFq9rVt1MXcC8qx1iUexMdfCRhDz1WA9hSBd",
  "key23": "23DTzeproPK5PEGKe6Lb8jCyzjCNZdVMcHdY6NrACKnUshsz5kLt55UEkd2HGzKsAh6xZJHzDLRHSPKXDT7yAvV8",
  "key24": "35BhBsAnRGgNNgGrU2g5tG5QM3VjE5TNkookEFqAVhCRhLcCXXV6WYMUiVbw2pnTpfuxEZBF33xjks3RTRK1jphB",
  "key25": "2nsJEtTnswHzcA9AuQurcecuBXF1JsRYQfnLqVCkhFxMMj8eWvj1kGfFB7v2szacLrogoTKhASJC5D9CEdUjx5uQ",
  "key26": "HJ3THJtfEwzeQ6Uw8zbccq2enQ5pLPBuHjgDwzWYY5QJ33FFXh3B7bb3bVs34fbi2tappJUQoEqiwrKWgzsvmn5",
  "key27": "3WrhYLkRU2BJYFWUkQDkuLcJF7vnBU7TNWiEwDzkQdVcw1SpxfiRBZsxpd9CvntosyEGJqtnTxAP5WFdh6RrkG3s",
  "key28": "38mWqfF4zoNBgHQSPKQG6d3zyCuYkHNNncYMMPyD8csETJZCTXWj5bPLLrv6sbLVNhU6kQFVAMG4zArCZdrQ3m1H",
  "key29": "563jZaJbZsBG91GDKTm81NYMwAKyUtm6diSYJUZt49YJvnrk27U1kJmxRQL2tbSttygJUiYjvWunZHLvTuHJ1EPf",
  "key30": "4bSbnXTs6owNSTZpnmWkGFtDMN7egHxwacv5dkwBYJz91fHcLpjnUbdBsGMPuqJsVDoQMopBuHmSHP5NthEetSd9",
  "key31": "PPqoGB2fqWc2Tg3ddy2i9q78hj6JLDQggdffnhcKbHnsgeS2NnBTNUZkhSYiK7BxsbEsrULPtfphjEVnVpNWMeX",
  "key32": "3P4N2Gggs1d5oeqDDE4AhFVZxBHNdYkhieNCmFMLgerDFTAem286W5ePkmhKX5XKqMkJncTvkJwV8qBDdjPnvo3P",
  "key33": "4NnQp53NrZWZwTrQcLj9fXHEr9hBPNrZAnWMm6wTqAkYbwodofrv31WjnB9SZ1tw14gQznuMsGzsurH7AAnW316m",
  "key34": "4i9mPquBfExJvCa1GGbvUJKV5BuvHkYd33css9sSwc9RZTDU8SH3bfvovr9m8Y2MYGfrZpRY3RxW69Ysio92pCvM",
  "key35": "4Sw4xLfjCJsoPfmVkscxVjEeSve5Hhx7oCPc1hBTnTmfC6PZHGBSqdug5W527io3gFn1eNwmxrzjKoPXf3Ve2MEB",
  "key36": "bgy8DHKW8KXwuVM3j7GJjBMrPPMfdcZteqwAu974cEmquscm99jBPkHsaJhoEHRT51Tuhzr8saYEiJ7VhdA7kg3",
  "key37": "3mht64vELzQjDNQdRYNuhrMgCwNWvU2sNTuJ5u4z4sLxhrchB585VFKRseDwAE2mqgPoC6Rar8GJkM1gHwLLXdAK",
  "key38": "5bMvo7Kzv7AocW3GPZsCMK2a6Hz5j7viAQNVAgSqXYHFGXe3yJfmuxJdPaADJLs3xmDc6uZzHMFxqHVJ482E1GY",
  "key39": "3Z958jyDgfcWttEoMz1y7fywY5at1AdtzPCk5ntonyhhDwHZP3Nb2GCZc64G4S529VjqWuhYEHKei6WRx11VokvF",
  "key40": "3iJVmn5QgJr9rxVRoXRDv8NaxAWE1UXpC43gny6ayvYu7KVgQJrBub3WH5XV7KTbr2faLg13v2RsBCZgwE9xjunf",
  "key41": "4DRUqpUNbQHRmrRkXyKZ6L4W2tr9bTxecSnhKs3UuhUtxgUfU69jqJ15DF6yqYLfH4mYnwFzQ4zP8C5JtnejWtoS",
  "key42": "3E29MKr2vCHuoAwz9rXnioKLUXStD61oiGbVJweYPGr9BiwzkUUE24vzkQhxWyf5bRpqtd4nPEphwovs9ueHrwxL",
  "key43": "3QCMzF6NW2w7E4wGPwYaC1dLUESihFuUwHutsAVnAiRLamukRfPvP34NK78GeHU1L59ZGmdiiokMpRGgjtQVQE4G",
  "key44": "fvHmTW5cqWLqpXeyXdtTw9UwDjR6tvPda9W2t9HwEmqLs8QscoUM3buJeGbKGNSvpGRqhQ8UoePApiAkktyNViC",
  "key45": "3ZwURMcdZAthp99XCCxnhM8gD8dSR3w9PBHBZhXyEeYqS36cVpM9yUUiq7yX1kqdjYHyofeXtPaJvCSqAzU3ZskX",
  "key46": "jxfaHVWv6f5me5nr62PD4kTC35eRNvW22AXhMPMFTDgX7HfxuAVTFcZ8TNfTnk4GPtE32tXFLur2oiDwEn9Qcuq",
  "key47": "53NagKRGkKUo52MJLHT4MZQk7EbjvEjkdYj5jKCiQtaW1gp4oLJGnb6P9iqjhAmFZnSXJdRJq1dLKaLRaXKE1YVg",
  "key48": "2oF6Z1hVvnTrKGiLoLaPhd4b2oK5NzbKSd3apME5Mhx9UJ5gqNVT19rzhuvP8WatQQQ9cvPdK7oSb4uRHg8M7tMj",
  "key49": "2kagdqtuo3FoimYyxFhDSPCSbrfLTFrg5bNaHvX7CGJVZvJVGtrXoV5Me1Xpr6LJmoZdtoA1RAbPbHDCN9XgVHVw"
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
