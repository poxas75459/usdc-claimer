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
    "2EUm3GHYjsKAXYju5BvDF7wQ3rxQhBjLyc7XbTLQMF4HQPbCeDJvDthRaQtTGkSx8La2gwJSdt484xAfT3EbaJTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647AmFeU7VckRK5jGQjpwbY9bz2v8oh8swJm9oqCJMAcx9Sy5aUYrg6qP2WrAV3yW9eBSUje8Qng8YwkyK3uHdRg",
  "key1": "acTU1eoNV7VSMVcSFENdFzDaZZpufk9EERhb3paLGTioHyjjYtadGVag3kEm8UNXV2wSSnDHESnQhDQYQgp4kKF",
  "key2": "324e2nFtktBPrumQGgbXujZGtw6qgCTAZwtqT7ybHLsvn4UYcJzKnTAKjvDR7NinYtprjoSKUX2Hy4zGAjNZ5c3M",
  "key3": "Z6P6CnTErJTxzejjr7Tvf7ao1RqUr51VCrzkbB5ymTDfapaYZYcwj9TgBvGigi2zWYABCAxNe3S4zeuQnJjoN66",
  "key4": "2os6CVonR4Dv9HsoPS7QaFjiGDrcEGHH6jtk8UmmcPJYymmj78TnjAg2GZTMk1f2qwS3vdoxvMVaA2YsFeGPByef",
  "key5": "BpJGQi1HKk7fkDbKA22iwcnj3e9ZVB4e5iGY8hBZZ7JG4KeLvssEaEzmhkkfdWUuRaNikMGZ8ZDhK8e5HihYj6X",
  "key6": "5JchFnaKVmkErSpwsgWWQrM6x8toEqg2quaRbLAVEHh6pqyJEG5rSCbNYphnrQxSLHWSBUMtE4g5ZCcXXKFxu7SL",
  "key7": "4dcbWML6TWxbs7xddHfDkNdRXcGqkV8E4wo6djXzSs5gt8TYNPZGfgHTa6TGGDmF5XUWbkjrG3h9JuZ98EjVZRgX",
  "key8": "3Rnom7rUr3z4TrYs4DPw3k6vJQ3JJuS7x4aY4VYGw4MoHcWCcQ12tpenYEfQVUDAbiNCW1CHPJeKbGewVqHsdcrk",
  "key9": "xJBXPkfyY41X8ek77fkzrbZ4mXq3ShCdowbYaDvevLfwQ9MoV6aRcBTxx7qPwHn9g8EoN8sNATpHcj5DjLtwmzy",
  "key10": "2MzfkHsLqSWwnvjBWd1CCyTWTnG8MGNyDqFeLvxqGr5jcj4eQcd16DPVPSz7gVsR3noU34AQbSfX2CzVaJqgoZsd",
  "key11": "5rQeLTgcT2VAt2jF1Pc5ABuaSzCd13bgu4PuXfd1BL519mKH2gJp9bsCSZVLzezRiHgGev5XKf561exGsFp6NAQu",
  "key12": "63Phcn694VJwt9NMb7y6uYx5q9mXHhGNNyt2iFbcjVaSj1f7Eh8BrEpT4Mg5JCdWGQrJouF1p5s8PNxTW8y2TRTT",
  "key13": "3P381M146bC7EAgwAsTe3YhzkP8a3QkyGtczLdexNFfe9mAdAwVtnVxWMwA4zUs5nPSDoH6vPSeD8Tm6yxF2skXQ",
  "key14": "4423pxFfj62hXbbK9qtKg1hhi6iCAXmgwvtBCfK5G6E6FiRrtJrCjYT965bkkQv4kHc6R8o6csvszyetQnUKKzJj",
  "key15": "v5A1aahZiKCS9bjK1GM9vKb5otnRcqxdWPYspQvM6kRPHUPNftvkB33nctV8WCMMZRS7a7RKwAnpPenVBJXLdZa",
  "key16": "RtNfgwGeftcfwGJrF7bUYgRZATw5DJkwAUa94QhHVT8XjhLtFiqsYbzJooQfgStMRAseHUZdN593iGaBHSZ7iAX",
  "key17": "63Hy3ec65XoiAbG55itEuhfLkHJX2nwLz13wY4g58nrgHnsqTq7YEufnCrBmwLDKzGzsURJa18w8Nm8YekuJK2Pq",
  "key18": "44NCuXHEEKUX6Sf7HWDr7ssyv4ZJUX5zUjeP2ECQZptHz3mi4VL67Ck2qPyhJrGRrF7KMGs3Xo938XbUbifSwPNc",
  "key19": "4nB9nQKvW5ucBn3h81jTiogJ5KXGqXZUL7RnXj67pido28sH7tsUENmTcgQdhArdEPAgdvsPr3s6VBynUCGJPWik",
  "key20": "4JZERsxvyb4KBHxQUnPfJ2ymQXFyEKE8KQtGHQQpgvAfKAq8dXFaMaXMWJ7xs3G6tM8bgg3AJb3YSSQb1BwJPRfC",
  "key21": "HHdXtqwZPXDCWCakVEnFa9WjgxVjgFdgdQN3djRnffmqHAq5QahpprDSsNbAMwa3N2XKaBNLLkoSvesrjj65zWx",
  "key22": "213iaKSPU2fbAtz9FLFQbhehEf7N7uBpe8v6oXDmW2G3AVb3JfyfdpvQX2Dpzd2SvLZXedqEQP2yYxq3pYmnEvGP",
  "key23": "rR3rzSsa86V6W85gGgQiNX3KjEX6aeBDF5KD64rHmZ69rdg9GVBTovNKmYjbSqtE61PoeR8PEoT1eodT84Sc9bN",
  "key24": "2v6ZJh6Ujix6DWr19FLyjkGDxramD4vJqGMKMe3JemyXRMCd2ekdNAQPbePk8tKbWLypAHdgVzPeoUfE8R3tzTG7",
  "key25": "3moPim2wgbmkWfpcxaqjK7nvRmyJyLNaqyn8mRVDQvL6yqPpKKugdL5duquttxpTrTrBc2B1Ccy1xPbn6BSPV8sj",
  "key26": "5E3SziDbL5z9kUkB5bn9XAvvo1mVqXaDTwJRqVrhNa3qxZfRqTwDo3R3JQkoqfj2s9Nb8WnoxAszvGNB3bxKMVz1",
  "key27": "49zc7y2AMfrYv7Lcw64qLMuBTRzHpjpRWjVLSeqnwqm6us17emVuPHYfAZhMerrFpu7bema1EMWJriQ7gWdSYfhS",
  "key28": "3oLGVVmk95WuyNYPniHHVAbbJZwyAHZJHLAHYM1fx2ezYZZGAPYXeA1rp5jCZm27Jzk2Mqd4587uN4pfzaJNdDy8",
  "key29": "5ktiLVLmuMnd7Jaa4DKUbJ4Gjt7wC3D8puzrrvTULSLYCHTcWSxR97MsLsm8nV1LR1Rt77puCL8mMTyVew3JX2he",
  "key30": "3GvXVJMJ2mx23ieApzcHtnLBuehZNAKFaf9XBYR4xEgubhweh6Yfq7gRt7VkqzJN3D9HKEkznm5awcfKdYkZFP8y",
  "key31": "GbUvt578JtJ4KbeodzYg2oQwJd3o61QQKcrw53WzXPvhq92mcuo19zDqQCPfAniN4WDmYFCv29RTKG4W6w3fjq1",
  "key32": "FDJXixotrncHcK8S4Jw92Hxu61z6ziquswSES5i3GBH7CfH3sAa1L4S3HkGeubs36JwK6RAddZVWi36jhGo2vXX"
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
