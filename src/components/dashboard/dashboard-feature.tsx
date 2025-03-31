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
    "3KVKBetnYAiKH824Ubhf376zG5vmGroJwUHUM7hVaCHKjabKu1bJGpoEiiqmURGcXaTCafHt5mJM27PESCP5h2gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhP5A6wCLLsppzycdZ8DL2KBHjvF4RNfeMQCTLwrscRWgdWvyMyGAmZhyk6TbXwTFdb8DqWxczgHKn5g85cUhzE",
  "key1": "2y6xb4JLQxoDA4iEJ3wrYMomGpe9yhjWQtPCY2gBLNgN8LF8qTj5uKpEG4cNZydZz7sfSSRvQk5ZeR9qFarC8sxD",
  "key2": "5YUbDG3QhWaiYqnHdNmwsa1HVDDTTMh2e9r77wE1f6sdD39h9y2dcTot7e7vJgMdfj6Vxe4hLMr3v4bAVXnxVPiG",
  "key3": "2eEGm5L5DBAzdKWkrm6Pd42XaZVDadwFW8hRUobNxiQLKNTWaimKvpdYwyxooWhC1WXDwbZmyz1R2fQTBM8k9hoe",
  "key4": "2H22zzzVsiz25v1Y5y3fr6VTqfWjr78aZ7QSV3Xbwnh7wk5HUMge2UGh97i8Uh8mmWeyMUgSSMC4gosZXaxHJ7vZ",
  "key5": "3B3gwh393bQuanin18pW4WvoYR9FGZrmNckcSEVm6tzXjdyaazrruBcTaXq1dKig1ePG4bZ4mrVMB5Jpwn35PKom",
  "key6": "UXhKYJbqAXCXFm1hE2kephgv4GgzSLD3JTrSUraWB1MV3opG8gRi9VzQeSmxQByfF4b7CCynm4u2iUWnn8XDepd",
  "key7": "2e2JaXhYPinLaaoABYFyYxVAHZ2PLa52wPY6Tkr1Dxjp9JevUyeMzVqj7EXwbT2zq2iU7kpwocuyCMgs1ktK94z9",
  "key8": "1yYj5Xum1wz9KBN1kx44bFk4NySLzaeZsz2TT5Vmt6Bk21UGxQuTJ3RtSmXd2LKvFe7P5g7EgJSD2timafQbUbv",
  "key9": "2b1VW5wMfso2TJFJf21X6T544e3Cx1W4YxX9Yc2q5mmnmgdPLvkrejxmKv1XdGVL6XBp4jXBBBK8zdGDZL7FFvnt",
  "key10": "2vSuwDyxmrMtno4thtV3hNFhhde8dLAHy7WYchEz2HZjkqX3FhXy7CCUaMwPyfHMqeuC6QQfRdQuGqd2KGFad5cN",
  "key11": "4SVptoH55iFcWEYDCif5Bkqw2RuAqhKdH2j7LD2WPtwGvC87pq3AE3Hi3UMfv9b7xGdarH1SEz9vjyyBkeHoVrSU",
  "key12": "2fKpgnxF5YC9j2rdzRmB777jMYVBikwu6SrczYTZgDo7pSZS1s7gVrjrzqLNyB2Qr683Uq7TCNtWHDCpyZjEsYcs",
  "key13": "nRYADP7iKGSahgrHNEAG8oJMeWfyiu5GuzmvTuT2qtRfTr2nxK2W5BsZ52ircheWmgq2AVtn6R7ZMAYJxfXPN3q",
  "key14": "24D2AjtpStWiuZEMZJtVPytH5Ezh3tDTy7nBDwHgE7yvVctV8WtRCGkufGeRtT9Q7izuupNPw953AktvDa4d4cjg",
  "key15": "65mYpsLqKhur7Ccgzau1sV6BwLVAE2Gs2odXRySmXafTGVFND1wWtQMTFTT4x7erGACAWjQyybA66FbRmJVTfUpR",
  "key16": "5GWRRohppo1GiX91BBMGUjk2q2FVtPz69hUMNUt7VE5Lwchm3X6ZGJKRf9GEXfmbHMupa9UXXzCcm9vbGHJGg3uU",
  "key17": "yfk4mNCekmCLPZvKRno2EpBQiSvYSZ8HMZeag4jaSCJUVCSMM3u6kDjfNgEqD6qKbncq1xDbyefKFXMav6PtcT2",
  "key18": "3KQVccmKamMPpUURF5vGe4YRqfnYngLHy11VdvTBVNaXPo4r9jyJiyM6BJv99NNghMrqFfg8LsBr1Cr72vaNDNwt",
  "key19": "4eDNEZpAasZt94pi9mgMGXWXCqPcS6yCgFAuddjAxVtQPMK65P1y6sSUguGXZDH7pM1Sb9JvsKnTGrkSGVkH4VJX",
  "key20": "52V7dj6xFjBh7Ac5G41WYEg56BVze6ULfwfMqXkCFxwR8hPSHvkK3CtkFMri9nbYNipmLxqVLHwjVTUQzYNNWKhD",
  "key21": "3fV4Bd9PkDG8ub4oWSdrPSjXZ54dAmuQMsegK67s3cp2jjs6nejWP1yM7v2etfVt6wTPUdt9D97vGYAhzgjTBqHx",
  "key22": "2TupFeMsPbbndjCi2JHhGmiKKnoBXwz1egDiZUUhoFAMfuZGTaJuYtgX9YBdXnvwQ68MUpJ66mdTevaQhzakW3Va",
  "key23": "3KATukWqkFGM9xb6v9fhQEoYuBkm5dBbavcEd2vMSiUtzkj5HnRRR4pzcv2b3F5rbzQsQbaFs1inkMdQ6hdqHVY7",
  "key24": "4oWLuYM2j7gspAEFkN8uEHwWoZTrxLvyZL58Ucob7w7t3z2qaVX1XFjTFHyyyNNDFUfYwTAKNxWXYmTyEXDw9JWS",
  "key25": "227CbEsbLePjuzcWB1b2gGGP5hBX4ULBCgeA7FV15FrmutjKNTtGCe6LjVX5jx9d6VGtKHTmmjM34AqhKJuA5Kwo",
  "key26": "3QNaeK2hDV4inLJxCZeFPB6kSeQq9388yTEhFWXwZTLmSaogW534NYvW4bbZjZWyWdeqJj9gzE4ggHFc3ymrPWEu"
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
