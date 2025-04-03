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
    "U1ddabYmCHDtpwdwEoGLnYKWvMTjWH9LuFz9tnsfCt6yFGvSuLMuyPfpLGCQWwZxYKoPmm7NAPzgWVWBH7q25Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYdRTgVUuwriysN5VhZEwcHADtfSKCimSM3Ty3peCJ86id8RVFmBQ2p4wJjTtE2WAfPpafbVUteKoExn4nP86t5",
  "key1": "4nnYskBfyhXeTxAvsGz9opH8iQAMPQNVhSMpqaaTv5ZTWBfws9k1tTcJk3iWNpcbhQT7pzSX3jNWS8f22x9S3rgy",
  "key2": "271fpyxQGbEmnzySmPcKGHG1UREHJh9arA8nFTQAeXatNoWSrD6z7CbHMrqxtsstHjz5tQ18Ezumo8qvZLui4uPq",
  "key3": "2JafqFNVJqDrZSAFoQ1QmyuMLU49SLm5zsgF33KXzvhJQdzZi15xTu8sFNKSi1piwHBF2vy37chsSR2fx5Z774Jx",
  "key4": "ZTUFb3rATZ9iDFtUY72uGdWuKockCQzXaLas8yho9ZYe6vsoW27qRo9FQK5eYjvs9NT3ZZ5rLEKKuThxjEdgvjS",
  "key5": "4aosmuyPwbyuNrWh74oBKqG5c4MaQEhkPDNAopE14vbfGuh9px2uGSNwt7iiA26z3o7Zx711Jfo8Ud8qHwNSfwH4",
  "key6": "4aAE2CDVdCpX3Bm8jsC8em9QyNHkmsH1DiQ7JnqaNDqLvUTjiqPJKdgcEPzDbarvxr3WGwf8ijijsPizWuePQ9iu",
  "key7": "5fqSfPNiaTaAcbsnBYfzuW7VosyU4s428ixwKbih5twzHeW9o9NXAvWjgYtqpzfXrGk4AnyE62pjiys6di2aPqfd",
  "key8": "3k9N7rYewg5CXms9diNwPtgPCdNo2vjcSq2oAgmMchPUyFgFkZRnyvTQnRm4oYP6NbvzKPjYvnxUcCxBJUu9iNTd",
  "key9": "3MJqVF2JXTgMS7uquMVQoDapKDvcqZbQJDN8WZip1w1qABRx79J4hNqgfoBZertkMW8STnxgcbdqTd3ysgAbLQsb",
  "key10": "2E5MvaYFFmkBY3ed3eb5u3CVQyZ1QyynUx4JS9XQJ17FSV5rjcSAhLSj8fnNV7RFVKbN6vVDHhEWvBsqs87yYxK3",
  "key11": "r3ub5LKzMgPSrJmog3JjbfeHbndsCPdKYm4bQVcWcH1iHaifydzaox2nY47WJZoSeLf6TQmstxSf7XUBvrUwiXs",
  "key12": "sgDst6CoxokhiTTUvbiC3EPzUbk85EKhywTr1dEB3xpZv7ptY4pR6GF2ZsLtfXXdtNWwgQa1ceL9pkfvmDVHaMF",
  "key13": "3LJ4T3snPMAcJAwLbM5k4Tk8vQLnzP9tWT8Q6N4ZUFn7DeEYS1ZfT6DFwLN7s4ShNDzeV1iZE6pz6ESQDPVnpstQ",
  "key14": "xaL7yBHV6aRyRsbPcvJrqhfRSDfzGss1cVqhRdxwB4P1v2h27jMKsGhGpZ8r9h783P3n8VbjV5o83k63sxHkrPv",
  "key15": "4mE7rR9tcTKnRwiYa8Wr7h89Kp38y4Q2YoFPFNRb2Z4dR12Ghs8eQQ8jApNSA8X9ud64eu33rMyjFzrFm84GT27w",
  "key16": "3BmWeZbgRQ9HFDxsEJ9hM3NpxMBC28jeNfdPub2SPtPig3vR7ymRrC4iA93EyM9dbRWF7Kbgxp3w8qnDXeJyLAUn",
  "key17": "4ZGFFMcPriL7aWJAYiTGdMGSHu7QiJo2ZNfjdCQF2KTUr9ZC1y3jtQ2QX88C6tz68JhFBjgyzq25QNs6m25Mm95",
  "key18": "aQFophnijRn9UkP93UX5aZvL3m4aTRcTtNWLyK1PMMKDjHRGdcvpNBmnZVfJ6n7raNRngpqix7dcQkJ9veeKuf2",
  "key19": "4EzpwPAh3u4EiEYEJg39aD2FmvMbDfJnhKdioScmn1xRZVzd5YFDMsTFuStBxkCHAdibUmC3rNfbVEcBvNKVtJkv",
  "key20": "4qH9jGwJepEBZF78fG64HEL3cP21Ls7hLprYmAY5J7mPbqtR2oNCrhSPnv4Ug5dPdyAUKsWovu28p7ifwQxeMSuH",
  "key21": "2DJ58YoDTRgmPEmYUZ56iPAGeTsQQgAsiqXYpiGR3srVn94EapFafH1if7Qb8ubGxKgNsgRSsVrkGKZWwrrPRN6Z",
  "key22": "4Cdjo7v3f4j3GKde2gpreZUcs2D5F52VspoTmkRw58jgj5xN4WFqdBh4j672ax7rbxi4QywV18dfKquBSXTeeVPo",
  "key23": "2aajiydoHHvJwdjdLoxcVwjvK8t3PTe6mDP7vZMxLSSzGJt3m2nNFnnwRSZLiVLnjd1MRSFj2HkNmXWV1mRGH9RM",
  "key24": "2ZQrNu9fmG4u9JnoTcDxfbkt2QCMYrwSzAXemMM33Eu3eQf259C4NGFsa7DcmbiaVqdWwoFRFScLep8BjCRwesTm",
  "key25": "5fpNeca9vd5sAauDsLNEToodA9ax3vo3axCza5xBpzjeDWPjYuSRU4NUtTikC4TVxbdJG8rVdmwbNLS1Z1M6aLJ",
  "key26": "5daVhazofmqxQxXhH45JVJnZdP81hA1xs45Vr59jM7YaGpKbTMhaBCzmFym2TsCoqZwLwGfLjnVc9i9ypMsNV96",
  "key27": "5f7wB1Mu53ZPC8K8exawZ3LjeoWnoQwhDfKYenZPnkpxZ7Jmqx8weeZ43mTdPHKTYKpYyEVmbEqQwfCcoY1CKmnh",
  "key28": "23ULpFr1dfswTQ32VgfkhNXArDigNGwmzVchQm6o2jVDAJ5tvVddtvBWnHcG3Dts7isKWVCLmyTDnhFxBQQWM3XD",
  "key29": "5uqi3D7g4tddbMpKqhMNATmPWTkH9PhLAJyBJNxpJQiwAK9Ctc7juDYrSArPgVDWxmXcYpeioDPAPQKJnUyUPDWF",
  "key30": "5wzMq7vxoQxBeRctMRqmTD1ey4Rjscco1QzXW8QW9JeS4Qvds4Hac4wQGzmznWFu9227xEpouzxa4dH4Ku4XUkNp"
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
