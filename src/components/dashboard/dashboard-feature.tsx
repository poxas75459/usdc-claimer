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
    "368MpNEdMrDJJqkMNPKqvgVcgz9xyY1oVoexyhgNks81LGLsoyVbibaGb1Cy11SnwUdceKzjMS3ZoUui8v1W4zou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zb73uBiS9Aoy1AYC2Z3V9ZTTLADwXwh7Cc6EbZP76drpBc1jxmNgChwMA1LCRY2fNKnmrCt2enoPoQNMFr4vyhG",
  "key1": "q2PAFcgX4m3b2p9VQuRKmy9393CNkXFJPkQ1XDxb4yDAG97M9LqVGimpFaSMe4Dc9ozUePX2ZAxC3rSxAgxeXLE",
  "key2": "5oj5VXxHcP2ZATPRo2V3oZRhRWjjkb9gFg3Jk76gx6NVherfREfEq2gTCLLBXFvMChYPrENWpMMAYjHfhYu1AqSq",
  "key3": "4L7zW9Xa5DC4RJNB73Lp8quT1gk4ouLq92zmaaTvNdFNhRxAg8dyD2TZUAQBSEzfj4FHq4byEBnTgV7NrSTQgpYR",
  "key4": "4zpzRREDmXsNieKcqNauojF6GY6HthWLTtduUHVn5v7pfpbqDdjXkEaLzaNR4BpEQQ1Xpb4YVuT4uFfachxm18KF",
  "key5": "5GQvVHS2Ewxu5Am7vg98T8sonqvrT2rjugYMVmZSjZodtV4oSzHyg26cKy5wYyrgfKqYXErySi582ZfiS1bHumYp",
  "key6": "4cNbRAQ4qxQ68RMqrf88if7zdTx9qxQtTCRAprMPVHCH9k2cGJH811GgxsvWx6ZTFjc9SHQySoY44BSmhcfx4vWV",
  "key7": "4aUkrqGTHA1JAwcL9Dooi3ky8JGjWnVtKiRfricggQuqW7At8bBUwUbrjCzsva4SfQwauEf17fABVmABbuwH3sRy",
  "key8": "2hmtTLpo1p38QtDNWbCUgRL6BvDdnc2zzhadjqjdburJjvW5r8FJ9Pa3TdkYGsnAWH7opQz3qgtq8CxJyNkKfzua",
  "key9": "65socWPDSyzbyvfwVb5jioMZpb6oaZ2W26VYd22Jxf9rJJLxt4vunhMneQEAhJ49YATTBB16gK77tFimh8SexHwq",
  "key10": "525SVMQz8NXMmS9Kz6Lomh2HFxf6PtNvzJv6Ruu48W2o58GtDS44m8NXTyNmy6VvdBidZT2HtLHz8Wa6SWb9aHL9",
  "key11": "TSXjyKWJy38iagCFP55z2XaWztdPqGQ9RoFiKjKjVZs15CTn2XgLd8qSJM1rWdvZJjQsfqGooBDVx9yDTwd8PoD",
  "key12": "HVjgcv4hDKKEkepqthQBPLvV8USWU88j9hqbdXNVLzRuB4driMQvy7hJJfATdYyvAHdGQUgdWedahCHyEudQAKS",
  "key13": "2JZeJXVtPKt524rb1AQPx7aY41cFQq2oNA7qeZQXawotZiJwExTfT2uC4xMvuMtxbSR5NT95F6bzLRR1QxpXGBj7",
  "key14": "5cZEjP5wQdKYX9bEwLFu1osJhVKHTqiVzDn92i8obxiyuATdYoUYKaxc9CxjxA4f6yCBCKWAMqRprud2c4UddM3r",
  "key15": "2CZVM9gyqmSvpwRzV9iSsPAntsgYDKYtJ1ugpp4AEJr9r5NpjZdNiLPYvntBpQor8KsYnJEDNNM1jfsGHaxgoyiE",
  "key16": "xVkVuRZEh5paywnxbEeuGQbptFhmcj1xAE1q6yKowvBzoXGS1ABpcmyjxcoeQP1iEEBr2qjaqi8VCmNQnDRnFej",
  "key17": "3GMQsMdsAaDTYi9GtNBsLUnzKgP2L9Q3UFeHPct8uNuj8WBGn7c4tM6nGJXCq9YZke9C3jYd7CFHhdadPKmQrWaq",
  "key18": "3HA8cwkJBG1ws2cmiA7kbGj9W1TtMdRFvBMa3CpyzNqWS9YSQmCsUPpxYp4oN6imMBg6t2D7r8cDD3DKv4ytPZrk",
  "key19": "MpB13cE8cCuVaamtyKPczqPK4C9oPzkeDuKmbBDEv9Fqguctta6qGiaq4bKfvypmLoVvCvBH3CgUUvgSKdq819C",
  "key20": "4oR5o9qkjpPoib5u4t5TfVodMVE1QHg8R2cSLpG4u8N5FWmTKjFeEVBoKeCPuGHLJvgES6sQ8V9nAW3CWK1PDyFf",
  "key21": "2nhSLMbcabWhDa4BAUTKBDxVyg6vsfZj7FQnetDTZCyngvfUZ5KogzpPhz5Bfdej5DDqtmSZVhuofuQF7WN8Fm82",
  "key22": "pFnuJqo84QprJnkT4uGTFdmqoZJJayX3CQuMMpnb71YhCoeEMSyuqEPLgHCViKGy2YxAqBXtsxa5DAJ2NkYSps6",
  "key23": "V8FxFnTcufHpfsfW4FrrVKigvZy7sREwoCEg5vgRCdj6oH6GXcyB5G7eU4HqeXWrFccyGMgEqQGMdaZvKCeYfwa",
  "key24": "2Y5JEHUdU5kzUPtxbfWupviWgFosZeGTrNMU4dJk3j9EDUfzZ24zhRUQfQhXRADLxvQPfz9EUQPkjPfWm8QVeda6",
  "key25": "ZUVFjNSetgB6HBo3XyLafAV3RP1e3hJeHyQSEB7JkETLMXkPzwqTWtZ2H6777jCTQBCMGybU7Q7fVUc8vKnyir2",
  "key26": "3EbvtsjxJ6JrYwyNnxXCoKVrq1DvoNkqCUxh1Ff6q7FV4dxowRBFZp3hDWkZAPMWXWjJ6hAKeLkk25TUDttQ7jWB",
  "key27": "2R4YMyrz4qZveEgZFRJh9V62Zb9uNAUZscs6Meih3exv9EVGqNkCV4gpj56RkxHQsp8FVVhzruMNpbWHdvQj5dt",
  "key28": "XbgDgCBGV4ZGdLCqrAg5zFh2NMuEYaLexX7xqmucqVDsg1LmaKjEwSR1KH9f3bRzWG74spUJwkN7jhL5ELnUbzx",
  "key29": "8BSwhvnrJEft5wvnrsYpUxYxNE6gmHqsRXkniSzYDVvijSQEL4X8Jqm7PEYsqR7XQyySm8jDdiZXwVJTLbhHbXX",
  "key30": "uzuGHA9oXLtZ8S4uqkbekcW2REEH32jag13Ddvj6RA6giAdWr879MWdRQLKCn6MXUoitjXppzbECn1rG9JnpvfA",
  "key31": "4ZK4VuDJx87Xn1YVVD1DK7Mrf7uFkAo5PGLUiDHbr866kmcpRmfUJgdv92vpCF2CDRzKV6cHDBW9Rk91bNC45GhX",
  "key32": "3Du8gW5BEr8G8fcNDnvei8ADLwnoYSgM7hxyjd6rHZPHvpLy8QCbjCQkbsqwyrNfyaAeoLvvzPNwLcaz7mcZBN1s",
  "key33": "5mQuqJFCYM7GksCSuxqPqSAQu59SXEYFsp1umLeytCbuzFe2ju6NjbD6YThrXx4QvQWUeQLsiafCHWUKr5fcXwyi",
  "key34": "3FDXfrGKE51ahscWijeGrJyMQ99vuWxp52AJNmZwBdbrPnzBJKL4rBC637RA3JQbkKBQ4WcRkz2BccTTniZEgxXD",
  "key35": "37nQ37TD7GYpgUB3DcFBzoxrAbEE9M6ZqSez8HsxendPjEZNfTnkVSsD2YCra3G8TeX7MJda4qQmbdcoHr3Y6B4x"
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
