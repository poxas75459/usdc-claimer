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
    "65RRdomSBebW1YZJPAq6w4Rs3P7DEqSNVeuBpnZEfuGQcQtT48MD2Pfo9vsZ7XRbAtNp2hJe7SF5hwY9JYf74wrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yESVjUzBV2FJ9HpskEkdiHdUrZYYjMHPedL9Yd4DHkSqnyV73oaMfGWeGXnqgsRt6NZE9DaoGHgpxbbWCHbXpTA",
  "key1": "4txj8AcUktD9Wmp9TMcaVbZiM3ucQB84kRNRRtUGTp99DU5meP2TXQuVwjeDXBHH9N8pHAF6LgxLCwyhdDyrDW8R",
  "key2": "FRkgr8ywtF1ivVAZnkw5oheqcutaDbdLBCHvyVZUxnM8QgnGAKASUz91VUpMnntYLF534MSwaUc5hXsSdk6ordv",
  "key3": "3hhiQ3bEejTKM1VdeExtjCDQwnDhGPrc1NcxAFUPWMJgWiS27cb8YTrKtsWQ1ofgzUrp5tkmRADzRKPzi9hNDQm3",
  "key4": "3PvNeh6URcsepXGegejLsNQ1ouAfzHwdZhkJzkhW9JaRCxMVRN4kYnXGxBq6qS9H44oJMr8rwP9pTY4WAfp8igCy",
  "key5": "2HvUTE8mYz6xx89tcEizibztutyZfFKWJdUnw6FaPvPZq9BmakdVL3qTLRcQnr9N7RXJKfbwX6CDQ7uwLsSY6Foc",
  "key6": "p2Tq22AELM5YdSp1FBwXDcRaD7fPVHtWaPf5i5TjsLDFvs6Q8teUuMpqu1gTWAfN42zFAp56kB47nLJpwusDUJm",
  "key7": "29CFU7nABBpdLzGV67qK65TsE98D3rrSma2k15ETe9WVmdjzkR5YLV9b4WaTsKR1XuGzmWUmV955yv1XBnaDAf2g",
  "key8": "3bVtDpCDvHdR9VTQLLVeLbG43DZA3ATWhqk2HJAM1LQrpCfhrd1g32x4pzJrNUfMG6dUbuuxRSp8gw6o3FZrhuUG",
  "key9": "3n4XCeNGzVmd9EFT2YtwHiTf72B1pZJXcYVnMvfXW5oBSmu915gijmyChwKGEPkgRGm8MCVeSJXwVmPFYTwmYuDb",
  "key10": "UJojPzJafhVMMoKictoovzwFKKmK4kumx2nwcptSxZAsFqLz3ZnJKvBCCiWrbumQ839S9WLxgyAT4RKf4KXMnfQ",
  "key11": "31CrR9ANUycWxHuFLhMSf54fx5BF5CarBVGVpjhKpS81KufDiMoAWZfJwKzP98kDcmsULjep6fdyy989V7RG9u6M",
  "key12": "4jDV8LqGKVNY8UdrxwosoF2SvH4pPfCEZkcLcU4Y5UGjvtjpNpFTjZMBgKk3bUmt9b9c51pMZRdrzHLRqyJb5Lnp",
  "key13": "24GLS1AKTy7AEErmQJxxi9arh3cjm1YJotefMP2eHa9AmkURT5PpiSWYZaEB2nxP8GVP9JR2r6XJoF8m7Es9ADqk",
  "key14": "2EJyGqW1rfeM8Vedt1C4yJoaA4TNCEJGX72QrP9NGiaPyRRpLxX564ZwLd6GMybVE6zcCSfwkc8MY6UaVk5MdSkz",
  "key15": "2o6gbcrouG3UmGoFJPTjo2tGgvPX4tiwC9R8Wn2ibLoP5PjfFxP5Ryj2PpvVbfY3qL8qMwCgKvfkthkCZBmrNorf",
  "key16": "2nrVesUzAnEZdgyjrJvPv7ZMcAv2F6usxm9TgdGKYTu86tAC3BrcyVJRKqBb8qixH63J5fZhpKGXqVBmMxYgJFeW",
  "key17": "PQeewbNcd92DKzJGeDsfdG5whJoMiwPFYe8wKRfxpfgxpforHCs4RqgTG5hN6pYYRakkYy6QNhqdA9wY5BSdxnR",
  "key18": "5tnVFxmW2sMcqzoKCPJJgscTVYDMxiSRzaxGnnnstadSCoH9ngVgyiW6AGkf45RvrkbgWYagX7eNWT9sJVvobuzw",
  "key19": "4QpjZVp8dxfwzv6wERjiwDvMV7HY8YoSx4qAt2qEtr2MpdsoKcnWuekcU849RNzcGFNsyVqSPms2oBcaiyfgwLQB",
  "key20": "3FqyUZgqNM9hTEsD6xvgJDFHoAps77dG5x6QuSS7X748aj9xGwrETQdDjVUVD55Cq8MR4KXi15fMjYc2Z74VJhE7",
  "key21": "51szp5pULuZ68u8SzDTwUeYXd2ewse6gPfBCb36mwckNnUQtgoqnZWERW3HZ58UhXDPecAH5hCnYzawx6ERhB6gt",
  "key22": "4BHiorLeA6M1JK8Yigm8e5hr7e9q3ud2Y2GRJAr1ChcegfJVmqBTW2hVCqS4TgCkYmRBDLu7agqnq4TRkWBK86qg",
  "key23": "wYhrztcmqnmh2mVsaRAheZrN7FeRrFrhwfEcK9b66mkoi6APvqihjesbxFA5LLSZVpGvrayTXwyUGMon8aJsYBE",
  "key24": "4zuH9skvVh7b1RkxQ1AvhQ2VPYKG5u37PYTnrjHrXjsZUMXnXasayhpAG2FhZyD9WCcMVTFXkiWUuvoWHw4CVsm1",
  "key25": "3yY31RH3xHjD7wWhmugcT7aKVrKZRwneH7TCzsurKquWZ5wke7nrEUSsN1RYFGn1a7tEbX8ghp183LXeJn35yy6Y",
  "key26": "4mDCB8fy9PeTBD7qxh3LjRNV2t89bck4TMZR7mpECx6ZnsJEEGLKKNLmoZV6o4hD699bScgNZuRmJkqaVpbddEbB",
  "key27": "4eFrd3nd7emGuco4g1eE8UAz5iCbyXy8LYXbvDpKW9kaBD8ntF1K7jqPNZ2YSNhpt4V7LkYKrJMvQKMhiGNRosaw",
  "key28": "63zw4Zc8LELXz1uQsWCsWGrYbXwDFJdf2KddA5yHk6vTiJQfhensDfScJcLkXwkLDyodsKH3pa69gcHzAX7X8uku",
  "key29": "2kpcC8G35FvFX1YqTLrDBH3KRvnDV6ntZ6MCTyAKvoLK2ksD752u4mCmcBGEgpmWtkS4shR2M5XpekqUJcjAHEBr",
  "key30": "56UhXQXsHTd9bETd8ZG7hXaTMkHfL3Z1UTtjkKifR1rMv2kVgeaBftbvQaQAcHsnaQdHBdBB1MZS27Jua9uoKqwU",
  "key31": "4QeNDBFrFYvA2MrCdJRF5Wjg3k27mjqNdkimCDAHt8bwtmff4vdZEnuTLCrVTbNh5i2Eqe88zUbtbGvGTQwScmvy",
  "key32": "4QiMdcJWBBsJyuVPmAqPATMT4fbG5TUp7VspTvkG1SdBxqVvTGr9Sbp2fDBen6KaJc4BuEZE1nAY35JcUgZXLseU",
  "key33": "5nkWeRZ3vEUqCn7HyVQ1CM8hBEJtfyaPd1xYDpnAAfQ6DqEU29iAjVe21ATZppjdrS4CeRbzquysBmKocytnUGbL",
  "key34": "3FaYUSBVdr8eVwixdbZJnR6t9pojzuahp5DPfzu6YA61rb8D6q1DALt3hKYxmVyGuM73hpggxCs6f7LgWd1WdYGa",
  "key35": "2syxNwTPQC4EiEkjPUsr6UfAacQ9ahT9o2raNN9NsFDQvAyxDEZjwBsMZaoJtFTx6W1mUs8F9m6vUCMpcrsgyNK6",
  "key36": "2iNKYS4xjg7LmsPutfMTRJLAM7mBwtwhEQHFf9UTA4nGBi3wEwnoWLf7v7rBtixdjJYC9ka4C2sSHCJCQfNu3wFc",
  "key37": "5gQFcSZr6txBscgmStz5k9Jvsczi3rWCPCy2iu1snGasYqbmZLZqUozoY7YFuEehdTSpvv13gA8mrfrHu87dngJk",
  "key38": "31rEGx7u1MEDRutMBBEFzGsZhZ3AZ7CGM6n9AyVyQTnekuwhot6uFpgBAzV5pytD7x5Pe79JjmTyBX9mufwjRLdX",
  "key39": "4WEtHQ5uiaeQEi5tD6otY8BimjNTr1SSJFFogwKyVvSWjXoRvq4qw1noBv6293GWv8xhrWKNqtXjtkfxe2pXreCr",
  "key40": "TEwVZprVB3XxfaqYL45VDuWBeapt6UfudxWui8NqHAzyw5v3WE9gFDVCa2woUoK5wHVWFDkVGDob8Lqo2KjuGF1",
  "key41": "5SDc96GA7UbjE33rEL5FdwiXZFXxhyLFVNYwQ6bHzSxj7WoFHpf7D8QQSZwn41of9XhMMpk6JxDQj8qMNtmagHBy",
  "key42": "4yFtyVbANvK2hQKa3XfJzc1sJqjfiRckT1iwNvUMheb1cimZQodbDeSDv1kwtsZuemztQiXVSQCh5Jzhc17oNcEg",
  "key43": "PWseZXgs6wbr6q8ioXMz2pj3DqzT4RR6oRczimZzyaCt79RQfeaygUKZwQ38p4NDNG7iPBhC4FFGcirPXRgQBDw",
  "key44": "4MFhpR9h8ZadExr1RKxK5o6FkWRx1VgaR7ppnn2n6WrYbdD8crAtvPDUoGgTPTtLKCyWrRGhRSDioqSRpJqKXVPs"
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
