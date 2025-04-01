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
    "4KodkKg3bftVL8Qhqtts2YVm8vLpMb2AwmXsPYF7CZgnVYSp2E7aiBR1qskzDp93Afpw5rxdzSMCEfzBGWWn1n5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YF2nGMsqeoYob7CNTaZMBCngfkdnrJAe35vxEMLq1YHgdJJ6cWT4v7uooQdDNfWj2BbF1CynX1gKz8V9SfFdawk",
  "key1": "4dfhuCgqCbDnR9W7H8vewJjuspFNRhnRkWw1Ft9NUieny2ZqqUd4BorPmywn8jj9iymnqKLF2Ty5oGZJLUW7oBQx",
  "key2": "3DUGmz8h1hMBLUahSuWhT5Kn1ZDSSHufwdKjNE7QxrDZDCAvEZrCoEK2FWUJX5oGh4ujFvxdeSgDqdeFMJ5noKQC",
  "key3": "2CBPDTBJfSh1bMpTDJ9KdrGZPKMwr73KLahiykp2cZSVEnmEs1eoV9gp9jhSLMSqDW8bPqNrt7SDWkEYbjrrfGxj",
  "key4": "4b2oAAfYhQKnTvhjFAjZKHAGZfcn58C6Z5uXnqK1ywpDWd2H4KPNU2gn2yP2JasAp6vwx9xHG7Pbv3PNRxEkwLLT",
  "key5": "2RbBoT4Y1tkrN3WpNkS3fikdx3TpBEEF7hD3q47z1ebWEaCphSmt6VWNpRXPYiuSdDZdmYdJETW4gQheWMRSn61A",
  "key6": "5XoCfzm6PgoBi7iBA9n2rVnp2dtp5gR8VMSZru8MyGmMoFi6hGxeTmf4QjztM1puwN56SfGhLmK4h5MgLJG2RTHW",
  "key7": "3AjW8qqnLnn4Cpon6a31eyiq5XEntjGCLpFnyUUZYd89Fp8CYygu6Yt2BFsepkztcHkLxPQsxePaCXtTM7mfpEKE",
  "key8": "54WSvnktpupcTU1Skd2FpQ2CrYvC774rAP5uvz4qLN8BTV7SnDoNWU8xxLZFcNDtyF8USRUwGnQKAex327cVf9eN",
  "key9": "5vLELJ6fftx7oDhmcqvuYFTc16E7i7N9dUVz1t948uE8uatwwd1P57CLoo6kJuZvKGr5yFqVfRfUpviaKVB9aoMb",
  "key10": "5kMWEftgCvVZAsreKrQs5t2V2Y9h3pf7otJCNyQc65Fi6QNzW5GpkhT8qAZZuFdhQ3LLjZBnUrE8NnwdW1f7nVZx",
  "key11": "5cPJznQgN4jmQLdT6qJx3SjB9yGxqDw1SQhS6Maj9UNKA8r2tSoa3cNbqtjdyZ5Pp3S9oA3YWVLJQ4ufqE84WwHf",
  "key12": "2KEfPcAX348NpnN26XRsAbqrVe5pomSSxBNv21Cy1bevBp9Yeyej29DgJxQxXD2tEQfPxVAti8ENxzjRD7fKSFVT",
  "key13": "tdaMrTFy2FfhwSRjDtiGnHhm6YdZBg5Dfbc44vNHMd2ZLWLnm4z76PnBGGM3sdC6JLL9VEGKfMdfps2ApjjsFnK",
  "key14": "2N5UojjpRHq5KAYLjhGhbGTyxNTW34rXwqUQhMLDwPZCN9r4uGwDGT9C8tkDnf4Sg9jK6oGSnyTgQTtAYGkK9vTq",
  "key15": "RkRF7vtZ5SWfwaFoba2Sw5PRUPc3ADX75F2N8QRP8ahsDEiUHzvKc5qV2h2zYP2mXPxDsAzLwCjpd71yrDKTKjJ",
  "key16": "3Y8KZJCAbBUfe86m5FuReq2qyXB7egvX6egkc4pFsN4dJvCHy26bb36eKtRgPjsRHEGLd2xxBtFA98fSX9PFPU3c",
  "key17": "fvThdxGKkTf8EUVFUuhyXMQbig4ojCSX5MWwScyAaJy6MspdSxmWXez6rL6VuwC7uRMRLhnAafyw5WsHvK3TkmV",
  "key18": "2VAWveV4jk2T4tFkjYiTAKQ9deKztdB3g95y9nVgrBpGWmpPwmRjr36phupyrANA9jwyTtFVkrAbwTziDNvTZ4se",
  "key19": "48HQR4BZJB2N4t9RNWLF9juss1UC4ofunVZGjLzsKT9s6Z4H2nBvBMf964aqJ1TZWvGCazWxufZAkC7eQP6VbEYd",
  "key20": "3NF7ymrxYRNR2VoFpSUYHe8rNmHFhAAL6w9ePPbdsXcD4m36JEUvxc7BeZzb3B6qbWTU7aDNTyCaYm9h88Q9cPhv",
  "key21": "2TdDaadz1ec5C5kXepppgNobAjxXQL9QZ6h9M3CjrpvoEgU9PturD7Cb9Z8KbmJGEnZj2R8HnPQAVs1HPPDmJzqM",
  "key22": "8JtmkMKzUxPCdAbAbPFgzwoHEWFM5H9pQYiQqPoXgGKgBXwAwKrGwLmdyQqzGE8nX84WLzLSF4jy5JnYbvUNpdV",
  "key23": "2eRVyL4JC3iCmRL1n8Wj6iFzGEEu6xWLBxQke3bvhqea9PYX3N6aNQ1Rs6k9bvpbHdHNgbFCxU5D5ZhDkZsTP3c",
  "key24": "mCTBDeeDhSZinjSqXuuWz4crHL4yz2EoXZtcxr8fdLif92k3AFtZKmrV5K9fZfZLPGvw12TuyftQ3UbdVnE3vth",
  "key25": "5VHPjVQH2JKw7MHpkBgyQqfKKLCvrbuaEKo9VPvYnK9wDoY3xi2vookGiJJQ6ZuYQr6TCMQBp1pxG2VE8p4b1Yf4",
  "key26": "5U8BdoChj7DYAaDAprducuPR4uAZXcMjbBN2UQpgrn4zs6gDUm8kz8a8s87nTwW8qxypBQj97qisP4rZEtEPmGSz",
  "key27": "2dMR5e2JZUUqsuzSEwUdHn8WqyBF1azgpntqKuE7zzbzKoDb6eZLRaqFSuRn334bEKmPoSmygyHsZs4DfJ7U93Yr",
  "key28": "3zsVnsLEbtzY28xYM8cRWd5L7sFsQ6QZ7CrWhA21LBkkW9pRYRME3yqf5npWV9AVsXWrahrtwy5rDh24EwQAgFJb",
  "key29": "js8pqHabtyaDHRSHa3ACDHt61muWCGi5Xeg7Rh7bdEnMxsKxw2C3uZ3V6saWCouc118PhoQwZdAayMdbXXSSr8N",
  "key30": "55Um4Tm4XCLxmpEHtiZSHt875D6TjQhj9seUwkouveDSsBihpPkQq6VsfmXFK7UwcnKbXPZdYMau6Zqt8ASsGoEk",
  "key31": "2mFjxjZjcN2LJf5t97fhMhYDxFidodrSZdbNzzEZuhGue58wu5K67kNT1HwZrWTaMDLeEVstmq71saUZAY9WXFxB",
  "key32": "3SCoZxKxpHrd9b83yRn111PjwaY8N54ZLHRfSeChdTzjsejJRBEesuERRfovJrvS5Ez8N2BtCPWuQuXgQpCHAoDU",
  "key33": "37qiqHsnd36hCnmP4ERm77X9B7bpaeJrLJU7K7pCkeeNcVrD1Ziauxed8MQixaJVgRfydaxTpCEo1rNA1Qb2U1Sq",
  "key34": "2Z1bwSTPUkzaN7NdWUfwHGcLvvhJXXiUXt99C73H7GgLHPD26oZ4AbH7wQ9VCgK86wyy35TefiAb5kWRWALDHofA",
  "key35": "cWfQjaub7HerVLMW1YEGrP7fp8SDXwYhx9h3ecibPejh4XnsvRjUD2jGqbjPcgHRwaxuc5Vv73JhkJ8Uq6aN3Bt",
  "key36": "D1y2sTGwHHPDbNBnWE9SLnqCzm9Ycb4BqP3pRS7FBrCopgbwEhgBmyiqRy6dn5tfq48ktKauPHMjwWrzyQKRopA",
  "key37": "47UDyUKmXhAKuFxYyZoJfrxCEsahVwdY6vV8F72i2s79tX4XP2VCWVU8zFRrx79UZXMcpj8TPXYzcoaW1q18Yjpk",
  "key38": "3Xo2XT2tRvd5RKzTFRdubVPzHQarKs9xi4hPFNYuxziNtnVviNHbXtswuE6pDvpqWUrq1hKnQYPCmHQ744uAQ6t6",
  "key39": "25uWXxVNDJmpbWFi7VsQLxoarF4au2K1ZB8AR67J8Ax7GhCgeuuXcL7NupHrxULr8ShqFK67pZ8Totyc4tJHRmNf",
  "key40": "6ZwBg2fSvDrDC23tomHGvzrvo2vtKyxXjzXU1fZ1wWrj5RPxEg6NKeS2wT7bX6hLXZk2ymYHjHBYoVMAbkmcgUe",
  "key41": "5Vh6d6ud66fSw8q5J1xG6DmPSjLFg4LZKLT2okQiKCZVVy9JKUVeVfbN4F2L5k1Uf3JHujKog7s4jx3AY73G4HEz",
  "key42": "4dfAz8z96VNLushc3iWqY6kcGn6VjP7YvBToUdfMGYsCewAyeuJH2nUvJ9ptrV5YhHy3TPMsZ51FjQN4RPbnSYt1",
  "key43": "2G3XUzYMBJwnd6ZK9B9RFwnGo48uXMb3mQkzMccUiVPriPBw9YVfwSBqDAXDnpLcFCGCJp9YqAzp1pdqN7CrSyEn",
  "key44": "YPsK39SGtsUvasStoZfKuzYPazKJaGFJsZ7b6tXqtPKSvfwVkCRRy3K6wX5duqvAuK4vs26KWwpG5UaQFAMn7JB",
  "key45": "4P4VDYVj6gUTtVwAN44bo3qTnHvCFxEdS1NSrLwUSQKyonKCusbPQSowyEETnZR2uUESYfrEA1j4xkiDcGeWZm3G",
  "key46": "5iiN4cidNVYsiFs1fBDB6eLHcXDCKVzDkmR4UJHF3a8hUccPwr8jWY8NDkjaCVryBS2hX4JdSZoSZqDpt4LBGFAS",
  "key47": "D7dS3C9pBJqK6E3bckqzcwqgarLAV5HpdR5mDMYNeBr3eRpQUXBNPYdiRbHoj6vxKEMzXVe7mXj7UBjFLc2QuwL",
  "key48": "5i25PmqXRcKVw6fxteCqHE7g3a7s2juXMd9AVzqgTx1G4R55SakuhxLJWGs3hdqaEnL5i8j2S6dP6rmsWkejNsM1",
  "key49": "5CocPvCuPdjWfDAAZncRMKb27m3a1TbhJXXfsWV94dXfQKa918hnVywg3VbLTfZihwn7qq4V91kvmLc18qo6rkbw"
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
