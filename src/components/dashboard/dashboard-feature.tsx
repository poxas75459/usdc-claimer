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
    "5XNsuWMEFdGchXGu7wdBjuhKzLm7XFEeJCGsQswDjbRytNQax7rPGvFNUUVYxnVPP3frUAxwv4bGmPkqTUZhmY7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34b6hLiQNY1K1mGNgn9QYvWtH1giDWEohyB5awwKLkmYmh9A4YY69offcf7CgSMgACzH7uRTx4jgKGMbk7tDVJJw",
  "key1": "EJZ2v1kasT5x1MuqNQupgQdckT3qX6xXHm3b7ygH4ZHukdG5NdWqFcUmsvZ2ptrpLhPNbj7BUzuPvGzsWmg7vHh",
  "key2": "vDTj5U3HMb1XCGLkcwiKaMazb6UeMomjBE82E8qYWjLLpmwPpwqATjdhg4HLmS7eToyUJb8D84rUdKs12SEmTvc",
  "key3": "2MCpdheXpUCbYe6JDoaDddJcLVPDm5LQzqhBjHjvLcSXZSmjWK7fBn3U9D96SZevXjKGZYQzsQUdCaArGURec5Bq",
  "key4": "vNjVnyPS3WtGxMKzQq5vZDiU1G6cwgJKmP9qr1G5xzoGEghPhMgfawctiPsFH7D4nNnA5Yg28uEq16fX5M2CaBH",
  "key5": "3mEXsU8M1MHfbVJnGiAPZCwkvppuooskwfR9VHinLkYgVZf1Htp3zwyYTuutxsk3Ue7iJSiPHoy533NUi2hAwV1t",
  "key6": "5ZFGgbgBs8LJXMPEpnWfjSqGZF3hHjf9aaXAcF9uuWFfT2i5sTdU5AavqKWdwuW5SPgG3sgbcTP1zok23QBU4uDA",
  "key7": "2A3Dg4Qj18nNR3EyPBQBA8TmQxgAhn66w4AZSyAYbkXGHGCJdx7BvDyjkod5QGRgEwTB1UMmhhHC21qjk44pr8qE",
  "key8": "5mEEVjpuVrjFQivudb3hzmDxkrrhr97NUQFg34mG3Bb1hy4Qd9RuiuK7YNj8kc3775sBG23gKwpVQkYwhVhbgMKj",
  "key9": "4UDuHB2oCDFXHsc5bTGqNpbeDDCjAcMwErs62fNHRyxgxfS796My9vjEsX7MBNq3Vj9iw98w5rpFKAnaXKZnFhx5",
  "key10": "62ykWjsr2SQLCLXsrhr6BkBtT1i5ATSLmmX7kto4FuMXoes6ZxeTygTZK6Efckt5kiHHT65o48xk77QExD92MvfR",
  "key11": "5NZTK1kikmdVt78D7ngp4ujZqfUmN6qiUQGnRkQDLnSpX4dDDeUyofAMMp4DwEsQHzfogZWGqjYCiVnJ9PPwog9h",
  "key12": "3KRcnYPgUtTC9V7qbz6itud6qt2neRTgbbcLUaS31RZUEauVRkQKAZSbJzEAw5dEbjTG7kHohTdqW2GYde4kvi7e",
  "key13": "2dcfVkCbM4zsydGHGEUZmsJdjDxFgNFqmtnSZZPMzQjtMoDwKuvKGnETtcmh375j2TfRvAKvi71HtGTrzsYA8F9w",
  "key14": "5ifYWHQTwqFVdrpTvWS1V4tM4aT3mXjp6tzNoYgQ8ircZeZAVnNZzESB7JnN6ne8Saus2dZCH44BQHS2BDNNZics",
  "key15": "4pQCvExRatoGT4cpCJWcMBiPGy6exg7jmdUiiDjeB4qTC2Lk9fMZM5dMV19TzeZhf9G78Qro7q4kDwgtYx6x5dFF",
  "key16": "4V8cJPcCMPwYfb922EfekZ7TaMioziRwMJLUwdNvK3GX8KtpHLqaHj8CiyzdJY2TYXf5WrVr1QrGvk1egeDNLh4Q",
  "key17": "5ZJmZMoXFvR7yjzVabPFSiZjKjz3h96BRLqykbkYKBHqr7a6RZnCTMjXsa3FrYzZA73UA5UKsJFT1SU6G1EjNZ5F",
  "key18": "5bsyB3rfrZyrgkEke13tjr4uVPkQw5RYP9abmKraShZWK8qfn1ekM4CozeTL5YkkL8LhWh1N47Bh3aXcNTcneG9t",
  "key19": "m3q46CgujzjJfvPHwq6MygkwoDZCtaqRkfeCx7pzYKX8j7YMTXQgzPAFnhAt7dt5VCyeRorPCVaoBw6vuM67xAo",
  "key20": "4RhcPmvwUsHWuwrgzfpcT1TxfSipa3vSB2KDBhNTr8g63LbTzJzxANC5EqPXm7yoS6XKHXYB1wogM11B6VThMpvx",
  "key21": "518uKe4hzew1wPvPXrNqytU5wX4QqnhwHHavwvJcdLDw7ebLnbPDuo5QX1picx4Q9bWef9naDxN7YUv6v7RCRe17",
  "key22": "5hkBHYa8nPQMafSU3BC3kHUP4Y8KwoQ38ses9F94qKEpyfbEpiyxwKzuCgtYSAtgLrpc6xcHxLkZeeLQLbyQkfL2",
  "key23": "rGdqW3N72KVsMdTEJA4h2gj2erLg9Zh4xPsPK7edCTwZ8XjhR7UsEo8AamXdi9t1CVDNF7i8PRPfMQxpVptoRzX",
  "key24": "22VNy76Q1ug9ioDRdE433qZYZYsKeGhuNyQeThQfYviYTmyqcufTX9pzfkJiJWrit2bmCfDpfCdjB5ruqwGf5aNP",
  "key25": "2yCj4sgXuBC7eP28srU11EsYnXJ4rYMcfyfCX8UTeCmMuuvyzM8vsMUmrMHVWVYL5vHC2TZwZ2eMfmTd4VeU3Xjz",
  "key26": "5i9r8Qj8LPZ64Hi5RxWjvPnjerdyhLFn4baKUptztRFU3vzjPvBLdnyYkcGYRuKS8SfX23xmfuTRa9fzFCwdYHFj",
  "key27": "4kFxw2r3XMTV3n4BWso5MVktBSB62Qqd8cAPhEfMff6M8G9QySQEthmPm5FdhpoNViofY4cpFXSoBy2JL9T8ddh4",
  "key28": "gpW5tkwnJY8yHzQYHVPdMT9NqL6kx8eRa4Se4yxVropch289nPdvbRRgEutj9DKPQt8uKyDeDfuCkdPY1td2wPd",
  "key29": "4yXU357aJxzc2JBJVZdNx51egqTpWYLdNss9sCPG29MMVYDZ7S13PSkTS8sjtuhxQQG6oWUW1uNpZWY2Gz8eXRzk",
  "key30": "22GuAELoxTzNvhPE4YeeomEka3HRqbBbsafgKdEi4j94z49s218hvTMaNDAFv6aiPKatLiDUymnRWMUUWP4a4BTP",
  "key31": "mHWnHxsDSStSR44nmgk93ZDndQbfLa6mwTNRpqRDhkvE7dXPR4bft7SXrubNYEcnDkuVmemNBArcyT1aUdM3ZZb",
  "key32": "2zM43f1KieMtoWZfsuZshv4q9T9pB2R6hw4wK5imzRvczabr6uAQgoUdYAmbsrPS1fpdvXzctqoX63vwtvLPRiBG",
  "key33": "4ujY5ht5PDmNLHqL43hNRyXVuWYtW8Zg4PhFRFqfewD5QS7oK1W2DVNryxZtYjUygkwiTJCkSJ4BhwYWoDhSQh5a",
  "key34": "5ooZWKStBs2g5qPx3sgEapU1cvTPx1dX4bax87CnFtXQf9dPJkjZYoqeoew4Au8PUCChSysYtPy5GNYScYbdFvHp",
  "key35": "DgnZzSmemhJXRQj5TFsYUNgUypfFNoS2fdWKtTUV6pMC35Qu1YbMqnPG8X1bKcodSAjj4aEeeK4G6LTeqMNnMHC",
  "key36": "3qytTQmWN6jNFAiA31zAKDbkMizY3HGRm4KNqjkXZpj23dtFuvdiGHVMjKEvPx9me1iBMjkYzEEFH9pVJSrYcGnh",
  "key37": "4LmUPXPfhaHWbCc56MwuYt5VRsMh3ffqdQyseHfa6wC6BseAeLjohV1xPxc1i13epRRfJaf3Pp1Jyr6DfrXBX9Yo",
  "key38": "2CGBABaDVFwmzwjzhxoJeCxPmUyzrxMf26dJiMmW6SXtwHav1Euizu7qnkR46wupxFocGEYRrtj9Zf3iS61jXare",
  "key39": "T8t4wbRrSf6f7eSt6SrUqAi3NgrMK5m4NHGYEY6gVqH82h1tsbegSHAWnYHXZXrBuvw4xt3h4cCCRMVk61ZMHiC",
  "key40": "47Brf2oiUBYEbvqMs9WkZSHm3SsaHeS5imdQtzGmYCEBDhUwoHvmKATRT8EGVpQCQvsfr1KRmeFqze25sZw2a46q",
  "key41": "ZXfDFNKfNyEcQqvEtA9id6eHsvYvUrpgv4kyHcZbWxvabAtFgLvCvFDynfR98o3KUuHRdEypcvFyhsrnPeqknhj",
  "key42": "b6NCysM3pJ1XHm3vf7x6fBHumgbNmkit2JjkfocSReuQzNpYWomRrXoP773Zi27yeGDM3LJfktMmEuoSqL5Ad3o"
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
