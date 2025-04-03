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
    "34GwDwMXemiVDDNxvVhrGA3K1feCinpDtC8Qhf4psGwf3ELxrK4XNSBch5v4SXcanSAFqhFuV3q3T4on8QcNBjcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nSW1LWEstJwtHVQb8P3tNEfnSEsLPimWtyJW3QxSphqwWTzLrNR1Xsg94iMMnTBnCMffSLSoxpAb3x2pZm4SYW",
  "key1": "8jnGjCCkDtJFFq37imCn43LVpBR7DdqbsgQtcVs3MDHo1RVKSEpHUFo3ePAuqQJpFomYRcEoBgKpDETMfLUxBqf",
  "key2": "44pKDHJXDgWkNdyfUZwSrxetYpcXedJyWPfeFTmRjbMxkSWtx3bnzmFzkDoQhJeiSwgx5Bf1dFV3y19t6nwVuNY5",
  "key3": "42FBUbWjEkWyQvVD6HC6CmqmKKSG3wjnBqNQMU9xwSia71wazU5WndQY8EM4QkkGE5p1oB5fotZkiRWP2ePeY8Cw",
  "key4": "SqCXC78iamRPg9oyfoqpRtc3Q6snvjmZxAcgQVNzutai67Jwo1wLQiWDcWi3jpn3BB4m6WWGbLc12xPMVaXkDj2",
  "key5": "33fPieKeu2QXujfqczZW3eN8rFYhTimeXYjEk9BzbPrkZRfnayWNdcqCeRjo4AdLic792Jahu1TEWSwQGjzDWeRV",
  "key6": "5HjdLEdSH8yfbk1DT3CiCAh9zhWffni5u46fkbsoVi4UDT6Nb8hJaE676kMmBrSyQNk24L7x5FAddfxbWUPDRSp",
  "key7": "5MaSjhZ6NzbegR32TTt73kafRbFy1miRT5RzQWUtUV6HfCh7KbDR9iGn16Gx6wXKacuh8PZdBxqCKpecKVEvyPd9",
  "key8": "2w41GNJpPTxxKJBe263pcwJtnKjP2k5bMVWHx43CAZibJ7LjAi5vWhHH1Me7HEe9mGp7NLD32qZaBZ6C9LQ4dCUz",
  "key9": "24T4enrmmittmkWzpqi8gpRzaMz8yhGN8Sf7g3rw7SpE4N76phcMh7VkMfGCX5FMafPNce9wmMiFFXybp15QbMgR",
  "key10": "Pcvsrg7ahrsA3ciQ2ngvXoHgaxrWNZ5CJ6M7oPQfpbCmtKncF7rqMuDAbwjb2Rk6oB3yJz8S44Z5VjQHbSnYKiK",
  "key11": "5R9h5sNoggv9XrbJDbS6KUMZ7tEsSBJZnezwYiG8S5KSh71C9ZbfKU44ZqnJuAb436rgZ2AVm6EKvg7sBDqcvNZY",
  "key12": "5BvRezG8tk5eQcFG4QU45v5KW9GPEBmuTgnKQVEW4ZGtK1JjeAmBX4oQtbPatjkvG2ab4jpmSmbjqiRvb3vWNbx4",
  "key13": "3DNLm8VEnkussJ1qRhiHN7ezBGCYvPXtJb2dTKBoj7fbyEYDHpxsmi8Hz38cpEKwwztZqp88F1VUC1YZypjaT4bp",
  "key14": "65HDF1BMDW8yhK8YFD7kPXxEnudFqEJGB5H6CoQH9BRLDd3J3PHbZWHL2vsdVC4L5xwKigpPbCkMo5x9QkK1jJkF",
  "key15": "2RXo28uW7wXCWZowScMVxPxhY3VdK8gdAwbW3TBQrgPeoJhswaKdscPwvL6CjWo62kZeSHuYp4nBap6apysPprFK",
  "key16": "3ZbyhTr2hw3AbDj9pPVofYXvMcKWeYkp1zYPVMMfXmDbtLCxG8XzsXZWyLzKLKdfTmXYYVMe7WLNqg2JHbMdz3bo",
  "key17": "443vxDraNwjUFcWqSGSjAHMqZdvzLdvs6Z4nNLfRPZuT6D758MTotCVRoi94XQTLGg7ZiiFhrce7HBhATDiH92jB",
  "key18": "4m6GDgHgBMLMJRprdzg6jRKQo7rjLC4P5WHJNWBdpwZgRBTZgj5GLgwR1iq5bKs1yDB3bWEX1W3PxTxtyYCj2L5h",
  "key19": "4eVU97twQ6zZiz2g7kjWokXUtzABx1KjbWJ63m9VxnBjT9rszJbvgWMUCbmxQvAgnGDfSwww5kDJcfga8muiBczU",
  "key20": "4ULez9d73n9rBTthKg6giQ1jvM3jKqFNFmCNgSZ7ayAyTSbzTb4sTTJp4W3WEzyZwEPeqzaCCgbToeYBnHFwEsG8",
  "key21": "42cm2Zxm8fTdCqYvSrAByszB8XDnyysApdXzV2gu5HsSU9FeMhgGLscDmqrzHXdFTbzR1ETNjELp33Z1hHtVihVa",
  "key22": "pUbhZepkCTUMvcKmQmfLX7TDjqqRuZts1gzvfLg3cCpkEVff2jM3S4GadZZVm2sNUgtDLNMETdssUwCWYtzExsf",
  "key23": "5Mxx8fEnNUrfQR4BCWWicBSuP8qtZpBw39z7UwBfH39NEQGvVNmtiJ228b3NPnBjtKRutvcxP9KA9cVVMQcwg47r",
  "key24": "2sR46WJ7UnbTQd8vPyddwB6oEQMzxmVkFnB93SdMW61ybbk9yLcChheZWFooqVXyNoNnr94tggRHNnpcZZ8kyta",
  "key25": "5j8Wx8fzhhoqx8dRSLTHjxuHfsQyr9yYzSKMRqr95YSnboaAWXxLjWkornvnmojb9DHcTaiq5t3njdLLGeHpeD3L",
  "key26": "3JkVY5ZS6ru28AAPQ5bamLSC5vy1GTT8bqJWdZpZGcGcEDu2q5o4657uKJ3ezaGUXarBksa3MbAbd8x5M7N34jie",
  "key27": "NK6vR7tYfaZxNshSGn833kTSc1LuGwp2ywwPYSmhxsUC1dLhTytZ3F5sU4mPrJ3f3vCrDYfYsZv7NXp3ERaCzP2",
  "key28": "5aPKGVD99WvVmrqakz5bWCFUZELSteurZri7UMHAxpQnrpQAuVsj3HQ5iGzbHGrjBUVgto1yLmskUpLKRPhqbVoD",
  "key29": "3c2t7ZExEiygV4jpZ3HjfRGZHFcLytUwEYuQaqztd4YvTmNaNuD9jCoA9d1KT1Zn2Lue4w3FsJB16XsWRpHU2yyP",
  "key30": "6DjASGyPFUyEnAkpUhhbS9YUfdXQTthzBpkVtpHvTfohsU71ko9xeMTcen7zAQkZSXB5gM5i2t2jXcviAeNg378",
  "key31": "4r6zBZRULGxWEBYeWdQzzZJxxA5qDs35bsj2Lt3y7T1XqdNHp9hdNeFZzQeZJYA9PM7jZjUMCSxTc4UrA84Exnjx",
  "key32": "W9dtyfDWx3oWSK82731qYe41dZ2Ks3y53LafKVKxxNSp539ZevUYa3sD1XAECFt8i2TEktgn1568T57cRDoCYCg"
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
