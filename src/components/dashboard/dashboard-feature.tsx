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
    "N2kg76ZkPiPBG21x46ztwsiQW1VN9Z1FbzPrME6g2moUdCc2TCVmSfx8xuZhubUNdaGXxmCFCDpvuhYVbcVDG3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8sprakDJ5kDZ1ond3LtwJRuMyHRgEeLMcydwKSGG2eK5JWU1Ea2bzNgYD1sPQM2NaZrTqPTzA2CQVwB8pGWx4o",
  "key1": "3ok1KF1rJXpUkPhoGQ9uGZqPQ6pug9HpPqb2yry5dArYjfiSyMxah67EoCw9tCMdHxHcWCA8A7mJvpaPpo84ftpG",
  "key2": "3Da8mvE95MoVo2AWDCPdDcRXRnj94PcFJoZtpzAfcpb49ZvmhPQnsPZt8nZ8ZBy8heUBi2PYCyX4q8VeYWuqSp8p",
  "key3": "3DiahDC8zuhXBAPeqxmhaMfcEEYZfF1ymbijmtGhNe48meNJKiBNAyCdoD1sPwDUSuU7DQwdhBxe78vPAdn2Tvfh",
  "key4": "o6b2bpKAKRQGBzYuJmmFWpjnFG2xyj2iMmGegxKQj6YiEQUPYwWAB5HyX8eEHjUW43HrAzshwn5GfQPTms2BZzJ",
  "key5": "Tjiik9ct34Z5RNGnD4JRnsv23j1T9NTktabLDXwT76kV9A2YmYM9XHVxzweJ4syydSjmuh47wSMETAtJ6Twz5xb",
  "key6": "2mTaZNuL4vQjVd9xbkvSpifF9nv4SRV5LCWXATNdh9TbC83MiZaF9HEY4vXGmqW5Sapw4YcKoPNCm4SqRUqBpPnu",
  "key7": "4msSWx1n4jfLbpDMgUffbcidtqCbLJtqqMW8CNWWSBa4YMAhCG1fdUEkV7Wx3X8Qq2J4A8As35bcG8wd3c2ab2dm",
  "key8": "5roc63ssbTof5hwWrirc9JneqeFNBhAjCrN6rhxbfiqui1aR2xn8512PHEHLj9vShVkfmre8HEJgm8ic8MDYdrYn",
  "key9": "4H27HhGGFHzLt5hrmdRpzSvoGE43Wg9hJUMiGGVatVCzuRGsZse42Lyowm7SCEkrJV8DFCaSakWZoZKLjqfQJm9T",
  "key10": "zAUFK7atixW14v2g79j1yUYbXcCF4pMGfhniRnPjg3pkJkmbzzQVsiQahmo97VdoSCwvty5C8Ey8jA16CuXKCMs",
  "key11": "5z9gSRGvpXuNBhYQHN2W5tySKKDGpGYyCYubUiJWhWwaRy4DywwjF9nSfHZnZTKnd5j5VAkKvvyw1KUuqrrd4uMp",
  "key12": "5Px1acH3ADKKEocKUD8ivzVbGqxWcrS68UzLu9ZbjRg9nNwGrWtN4vaHHmSvJ2ycSnb9FJL6ebxyb56erjioVE2s",
  "key13": "2p3Jnj9vhzW3v8gJ1Z52cVj8Se7P9xLjdNEqrgbE4uLnEcprPtWSStS1vyrJuvRErU1vBR4UDuMm4f4xfht6rUM8",
  "key14": "12j71DoiKfXCLt8wmzGChbZN5eMB1jrMYFEcGZK7dCP5RzZhPwd14QVR2trrCS5e9aFytJr7SumbsJy3a9VMsd5",
  "key15": "35Fucx4vN453hy6MiPWR7dXThzKqusVmMhvbSDQNRW1RaYfi1LYnn959CyfaUZ9WHMFbhkJvUsTTvrphrJXQvfJW",
  "key16": "3iDryTaiyc4JNGjeBCbF8MhkQB44TrYhjLdrDSbpBR2NkLzoThwzSDLjRtZsvjeMYEoLt9B3wnZAawmWTi81ubND",
  "key17": "AJHrmh2njGfLg21izL7NT92RMhvGP9zgtt63AT95qJkLhPcrVSghTsaQEx5VQnLso3rSyWiYYPZL5JdidAG4pNL",
  "key18": "481juMFqDeKrgpa5tgpmsWpawxQqQX6kfLqapB1rHwmN59akUNj2fBwVP6WrWxtGxFPb6kLF6PRgRbgkkTgpzhRf",
  "key19": "4HMMD4sU1xbgm2yXoJMBSQ3VL783NWG7JWGcf4hPVfnb3Zc4Fri2RQPbKp9qDTnPWb4FvrmHHFDaUA9GmHv8jKAU",
  "key20": "5PcDS8wT1JJKxh8rmwzRPnaT8gbEkz2LU9TKSqbsimAoRG4Bn1MkLAw1vx2w95RpwEsnCQLFJmXfzRdiBmvq1ALQ",
  "key21": "59fbBC5X4JVBb53iL3sfe71wa7yUMVPF5bhRvDST3X4onG97bVq9gfw78BPtNARfaneTVg9PjKkUuAFhDDTsSeWV",
  "key22": "nLZcMo1nUiWXNa8u1W5JR3cxxPwaFRgqSrdywujcH8pWvgisKEdZXkjDPXyoTxbqMfNMuw8vajxZUXQ8BTzprNo",
  "key23": "4gvg8FaepTFagupAU7W1gmfzW734Aup2QtSSdJRt41EobBGDBJsarGFibUfZZvfyTk4GkhhHybmV6TrA6hU7pnFs",
  "key24": "3uvCcN9StkJ96mCE8KZc5pdtron4DkXhhk5XrWzBq5zrgQ3qWmgBPSpvAFsBAw9oVzKhdsGdDFh1Jm5Y43sRGmmx",
  "key25": "3pjEc5GMz9v5gzuiaQSz7teJSUzZfvRxBTPr8ByFtSsH5t23Au1mHg1FhpiH3Vo5jbDChcKjhhTJ9kVGFqrRgBRt",
  "key26": "2m45xKHnRqoeXLicNegpZrU6npLuNjhsA9codyiAw6H2qDw4ApLmxQthkYdXTVhBim5qXXoRyTvPbcgCgVZEbhG7",
  "key27": "49DSyG6eRb9xtZLq1bBDrPN1WQfuienzVbFFCgTABWtLNAAbHUQ68DC1ZCXBsLDAaWw2DbXcMZu2NvW9A1Xy7x1z",
  "key28": "5ZUG69sQM28jGvNf7ecLHMyXiuEFfs4r7XCZLUYfjagC3RX2GD5aAr8szGhA6LrGiQhRdzfgxBnY4xKN2m8ZkeMw",
  "key29": "4d7X9ek7PGdG41iEVR4yjNerx5fvwh2UqAE19mXfsaqSnUnrRS8DY8RBsKQiw3S1vxhWRCEPFfiuLbkWgdLKTXRP",
  "key30": "3Q4iEsiYGF13PWhWv6KiKEzUD5eDzaQRCapBJLxTs37ao4hJ1oB6bRags7rTCzpeYmBcPcduKdL9MpGXU2B1DBG4",
  "key31": "5hJy1aKwKTKp3WkW6CZtntFbJC4boWiMaqetLLvFhUxfeuPQp2SU1rtEFUqoLKRpVcEJkvPYXryuU3P1jrcArHXW",
  "key32": "4V8jvo3r3kEtZm79tDwtz38ZyhAHmRraam7245TLBL6XafiDAxB4ithEJsVK6iGZFtr51MSAwqjwtQYDG8bjktZ9",
  "key33": "21GhBQVbaQCNFqCmQ1w8n4oArW5zch8yP4qVoHE3Jt8aba8CzFkHwWcRRnDM9Ab76Rtm6VqDq5RLUv8ug9dnBPuP",
  "key34": "uUzzbGk7QzUtZYGXFCdPgucV3KFpSuc3E8Rs8P8Q8rHV8neGnTKRvj3A99iKFHMgmubxZUtsEd2hNNvbCBbQA3B",
  "key35": "5HirxE7qEMpCNrxLMTzeHJxgtawq9cYYkVAhq43hTC58cKDBW6wnAKgE4BmyKqNkRkJdc1Hh8hfqxmmxa3LVAxMd",
  "key36": "rKtWKcrXahgUBNc9Mki7YtoqwzghncbPB9tekKE7C6fau5mNCQpgH9XXVyzjrthD5p5fwNqLrmX9ep9G9H44muA",
  "key37": "3iDwZS41WbBStfH92NMWQzDw4KL1C4F63oLPBkKjNPrqNwHG3CdPojcLf2rjvjGYSJ8QsAbaZzTscCqphZnwSvBJ",
  "key38": "41emk2ffTRm77N6Fzp7SaPx2iFskNFAogeMuaYAkdXiaQLaCd854xugL82fF9YN96ySRZgepPJJHZJVDmhAUsCTr",
  "key39": "58uzboeoRLBGVrwU6GYpYuaZ28eHcbrBvv63BBhYR5FcqJYeKMuLsMzTbyy9itQsiktLVsoxPfYDfy3Fs1q1zV5w",
  "key40": "3pHTgT1QVrETx8sKdJCpyeZmpmt7Dyix2AAxLbVhfxmPuhuE7RkEM54VkrbF2mKAriSX2jqvqcdAseRVR3Tp1ygb",
  "key41": "2KvGx3i9YUi7bok5hkRTUpEhnRReUTFwSMS5Gjxgs4pRj7eUSoTh6j2FQ3cQMkSdQk4MebHhBMY1cPqGuJWALrTR",
  "key42": "5CnFB5iYdYCmauAiEuHxPuVhTy43YKVYtU6f4iw1dG8FCizsAw8p15LhRLikHQKd4bUZ64cpMPR9VyNE7nYQzpZV",
  "key43": "232Mu4UaShHyRv2CdAt5Q8pjqSC7TLsn3Jx5wrgV8mhMjqqBBG5metmBGRsCiH1QYxksD9MCy4Wbpq1GU2d6YLey",
  "key44": "57yekyqqNJ1HzoRbtPePfG7EKDLHsVR9RwN7vbEvEsUXhh3Gy6kYhvkiGkJDw5qwCr3G5TYHssmyAFtczysh7pej",
  "key45": "5J27qDEw16dmGcBoamsjmkrvZCmHgTTmCyWiihKeznSTBxRoBWa7U4WCeZditmM7fvbLSoCDN1LA9dmkmskEzTpQ",
  "key46": "4xEop4EvNAgRLrW3gUk1RsHmaaFaJaff8SRSPNBuaCBCCTTWJ69jqvpVtSvCVW4qHXpfpQg9V82F18jZaW6voESn",
  "key47": "4zoNV4oHowAbJNLoyvh3CAS3NS5rT7NkSaaJTccg6bLUPEtS7xTJKH9Tx2et7YCLbJ5QxtBaD6KRnzCDV3hKFLgr"
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
