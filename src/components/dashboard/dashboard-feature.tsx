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
    "34ujNkKuDenHXt4dFWoZhZxCDaCRKpNtcTB66MjhMC4YTtyBrxzeJR6MRoGqVpbZn1DS1Vx8QuSQTpoJHHdJWaS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CywEFEpo8oQnNmcSAka2o3qPvpUFaWCnyGsi5V3XarZ1QzXwP6iVBcbGMs4JnfpUjvitDmDPy2j9Z7ndLjoNXiJ",
  "key1": "4uc1GSBz6hdLsq3xCyXxaY9QY3t27f2kvgxE1TwovvNWyj6jjFSUCLbehX3K7w8XUeNQAqsooEt55sCKt2YVkc3q",
  "key2": "5GSTuPqxssPHpWK4KvvMcdNKFvmkxqiz8CeKeJ8qmCGMKRqztbuTEqU1Jfxfg9XiG2JHAVXRhiyfPeVTfgEYhcW9",
  "key3": "5wFJGaqcbFWFSKkEm1qKXve5zZ5Yort9wn1mX3H73hzQhBWS3opCCjYTeQZZbQQ4Pm4bhZ4U7dKrHMah6nx64Y5E",
  "key4": "3abyvs6XfPeSAgqF9tMsx2Rmnwad2JZdM1oet6HwdPmx8vTnRALQNrpDx2NZYKoHxZAMyWnkfWYMaxai1GMmm4Jc",
  "key5": "5kQWQTyiGHpggRvUEKC97XUNpA8MjCjqkiGyGCdbhigs6MgFULLtG4AYErcuaqSbRFa5mDsrh5FYwLbqwEAJYZg4",
  "key6": "2Pe5YZ9788iquoDFwDxQFY9P2Yhurd44iTYUd7ULRUwVnWxYahU14D7NtnGoF4saLjg1CwvwCXKcc6d73KJfiDA9",
  "key7": "2SQHRD4iKLVBjNpW827Kb9QfdCAaqpA3BCqz4AvdwpNhr7a2PBdbv7twwQAE8cXJioZi3wzGyvSvmmAnV8ocJpzL",
  "key8": "3k4peq9xUqLU6GuWEbBhfszMeqCsJXxBkGYCN1tnJGsY79KPmWr7JX4KwiPqyqTZkxLXp3sENVQ16Jjkwz5mF9SU",
  "key9": "5ZnkKKyN61YA8tWn9ufijVVVS4wvfsDMH1deAPsGWJNT9TB2g6TmmhM8FUNkku1cYs35opafngNPebjJ91ae47Wk",
  "key10": "4zMsbRjeXRuUgSWNW2iuQwrTW68L4mz63Wx5fpyqeWXuEtU4KN4ikHwqKnKB4gRJfWHrwEtgGHqPyN5SviZXZMWz",
  "key11": "4D1hcEvgVTqbPjAXqcXuC3PkxXHsFsAQgwrc5ZeYBxFtwwLq8EKtwLcGN7tYphtf7bQ9hq3fG1eaj4Cc4mRErjVG",
  "key12": "4ZqvgTEGLRDgPkKYrjX78D21U8u9s97JzGksgogkjsfa1AxPXnYnLMjKpBAAiwdtWfseQYFBmE12Bsv8pC9aLa4P",
  "key13": "3s4xxKykjghT8bL6FsftuaoNG2LmkacHY4Y6VRBBXoVsSMk3qQ3d21TuuEekLRALqaNSdNLJXG2Kkb8NLrw8YEMU",
  "key14": "5qLzoohqzdrtk5kzvnCBUtrLwQsdeTXckWoB2TyHHHDBJSdKGoqKgKPL48CJzHMWsc83pV18tyerMnErmJSt8hok",
  "key15": "APXq9aJ3CMiaR7JfZxN4GP7AAM1WEvxnJZNP1aqg2drGYGctqb9VFR5cvCMxkpZg9zqMYcED266cBhh7mXodzeW",
  "key16": "4DPnredHVpsVRP5tQdpSSqJBAP76bJ7xtK6HvRCTfqFYVHqycnSgVUriWEnm6brMHp4yBT35sTY3iTEvhdwoHtjZ",
  "key17": "3gEc1NyVYQuWmjWzZjF9PTrdAQ6BKqxEM4smym5rRNRvP77AQpfCShB4ujpRYbZM1RB4QgPUDXS3HQSPmGSbaPSQ",
  "key18": "b9cqB2aNLYP3nuWyHEb5r6w5TPVzLthnMyjijxWRni1KQd39ZPYiiHs41HvSg341dniPiwBsBNdUxAVYZiLviNL",
  "key19": "2tPo6DihbtveNX3QNLxVmahqTNtbtpWb2LfE93L8MQnVaGk7iCdSdVbir6zCvFhSS6xuMFTnKj28yfbFSBXCSirL",
  "key20": "qbFmP9RHKgB3kJTnqeY1y4XPcVsxxAtxFmWVDuYaVqbcpAQfu4oVndZZNSLU2XHSc6FZCdwme8QqzvJ7vrnwNmv",
  "key21": "4cgSrDFmTS7n72Qy9jYvvU8DM7G4LmaRaTyBTcCK1LKS5zERSY2s7YVAetKuAW3HYyhJgH2hJwPSpnsjk2bGqz46",
  "key22": "ocepXGXvMbgneKgg9ku4vqUF711UP6XW8HKDUU8d9Pn2id7KPPt38CXTDp8QZTWsgEnBrYaE6ATm1eKc66m2mMi",
  "key23": "24ydxFfjbovzwb4KWa2WJaWDjQpgACXvQvQQdt6yXvuHRCShUctGFZtitob4ap5FL1HgNnxHoF9YarVjWLk8a7Mc",
  "key24": "2tMG4rrKUoZN4dJLgXAkkrFyTSiAfRLz3XNab4BMmQMWMg6yAdBRZ48fidbchGzTDjUraMXrPkg2zQAaJRCc5QLu",
  "key25": "4CezM7UzjsbEebNS47Y5M2BvTvNf5aJ4fwzmn7ms7ue38pjtBH89f4JBsHrBDceaEL6xcqa9uBDwv72KaRfQunz5",
  "key26": "YTgXecgpBXQnxUXwpU9k6hrrh81BH71rveusj5VXY5MNK1VUqsRdiFUQ4j9ysxrzT3KBCtrUMFsWiKVg6FMrqye",
  "key27": "4wxa8vnSARBRRidQUenuKg4zhuHaLH9kA2xaxqMykcMAFde12MEDwdxScAXE1PJvv43WbJn7dh5V6gqgTk8yde7v",
  "key28": "2kDL6LtVSKoTUx6ddgK478EG8LjSnxpRq9AD1eFb33D6cb2DRYGTM9NX7WDsqX9ymF8EvYQ6wxR9G8zeikry1Ajz",
  "key29": "5kyX5G29P8ZzCjhJUztcb8yzEYHLnNWDyd4Knzyd74wrnY5judiw8X7wfk4e41i1F8XtJZTjjMbP8PxJVx8CJXiV",
  "key30": "cWw2jJ4QkMBKs56K9ZDH6o8QrqYS5eNfLJhWTRoEBXEpkvjQg5Xa33m9j3Z8D67B9sj3GNkJuT7NuLamgRRCYRa",
  "key31": "2s4iTL1SSgyShv6ynmC97od1a4ttx7mcoCDEdDGymC4GziSWbnmoWa739c8yEUpCwFzvJmjxwcGL7WFK6mRuZpDv"
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
