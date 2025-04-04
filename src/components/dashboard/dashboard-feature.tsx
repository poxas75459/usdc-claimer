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
    "5k6ADViJga99jbJmqm589TdLjksEGsd86hn7mi7V6vnxMbJnpT3mbhyqfCuVfVSnhs9psinS8YZjWdhhv7d9r5eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYDbqNovH7Q3qMNKp1iZGp2AQs8KqDHXMrXxiUmkngkEf42BWCT5gFbLzVFhAk6LYQ7o5bzCVFqWkwZRYbEJ4M4",
  "key1": "67iFQkVc5bPWNW5FChFFR6hWUqpaLdHaL3BJVPQnjvTzp4cSPoLiEgkLStYeXLGCn5b55VWEYorFdW7Kf6SmEiB",
  "key2": "5tHr8Q76yafawNiRx5eUR11fPL4kFV7u5p8hdtJWpTFLNjVngogcmaa2gVzpMY89XNcnCFvXaBbzEkTQhiikDydb",
  "key3": "4F7W11e2G68G9TbwdVZ8HwdzuCeVzkC9QZAYDfDiFhGxXye3sbWep23McB7HZ3sDkNhhPmHT5Eky25nKiokXF4R8",
  "key4": "gAfFkPGXVY86CnusqjPV4BBr5MM21k5LCQurodztRcw6wyNvJjCW8PYqpMT47nLky6xsCu7CKAsNqdYkEEAxcnW",
  "key5": "QSQhQjbMk56km7yxb9D9tt7QyCsQEfcVUYkfzKea8bVGfBDtGHetMUS14g1p81wWooJ82EqFn69jQ8M89Ym8TzS",
  "key6": "2oqsEekpuUMoJ3oTm79tXYKwW7HrE66x5GfqqU9QNpBZWpkB8KHrgFBZwmZD3RJhjKBHPYHUVHRuPaGzFcfnGXKK",
  "key7": "4K6WNmuiUKMJD8EBnzJkCvopzEfMHapD2d2oHEy85Kxeek8MskoCxkqLX11ycnab6wenXiTueCx7k6djNandUYZT",
  "key8": "2GrxXgki1TMyq5KiPp435wS38cvyDswfUTxzj84wvQRgLzbcFjThJT6MhCaKW6BcqF7XZ7RyiEiA5GCdGchrNiap",
  "key9": "4ZGgd8QLKQFRmCR6RycUjEoDhusq7EQ1vzmgA4SHQJwR8stpY1wwhJVMb63za7wqgtWB3znLjQgxCZDo5o6m9ykH",
  "key10": "2yhBXd9eiCJ8KBRheiSQ5X9J9V3PYobHfYEWGZHhvHrf36JCqqa7fg5iADVtYLmQBhyg89C9Yw1cwTqJ4SMYsWSJ",
  "key11": "2UCKRNN2wLut945TBko89bJc98Dn1FQfyGvx8AeQA9BvgReWuctqkvcn12hKrAQi2dVYcPMUjuHgMxB4nKu56ysf",
  "key12": "4TX4uLjjLAKrbxRKTk4HkNXXHS4NvoyuNWcmEuXYFYAdHJS8sKpNr1HNnbZMGomd2zCkAZ3ZashE3gqS57guDAX6",
  "key13": "64VHFv5pAf7HywiT7bJamaFZ6pGfargMgmo2XRPq9nbJngnizCyK5JGm1zqbJDuHFfMS9nzNfMKanpKP9NNpzfdK",
  "key14": "5ca3fuxTc1okFSQhc2m2NeE4K8rKWzMMb3nLkYWsTRFXKHnsCDWFygjsZWKkCSSNX9iUHo1K2QmS3A7YAnXP3cm",
  "key15": "WBG4wiCKRp6EWBBZ7sG8du9TDZjbGykZidKhKbGKRbYFcNwy11Y4DFW5eL4oNy3VCDbGw1Yn49E1sXdVorM2ALy",
  "key16": "2jw6udufn97bYDs7G9RXL1FDCvzJoQ5MZU76WYR8MJ576CtPQBQL42hcfXLbSTa5GHpSNx91XZjCiJaMaVsCZ7bt",
  "key17": "5AVkG7wiiA8etMY6TE9axaJmGxj1pdiUQDJ29vcpTcRPsfaxwRr2gDBZwUejJBdL4WzjHD8NaTmaD9stfd8UEGtb",
  "key18": "27joYDV6zWTFTnmLmgMDzRWiNiBCxqe7Kuo9CC4uZ1WckQ1RLfUTpKZ33u7otQk4XrnY5nrnjthXPeGbwWkrczwG",
  "key19": "2L6pQf8wz8Jjzgt7gTLyjUQvvftMvRCi1M9LuqbKMRDoSXLeyweTBWw3zhrecUE9BVgywCmwxNU52QsMM8SeRVBd",
  "key20": "QqCbBYLjMxwq6FGmN4Wip4zSU82KnYvJj81xMCUMgVVejQ37836UTkKetjmGGKE1RbdageECJ7o1NHQJKaWAUcJ",
  "key21": "3VujL78B6bt1c9dEXyfDRi7USuJxc2NDVHdjCrvupuKu9kZjrR4G1jcA4yiPNxMMBRmvPFLWf5eThZzDioGgE4RU",
  "key22": "4hoJsBZoFLHjyQzAouTTm4orGi7aovj5YEbkP539K4Cp677MX8qyL2MCUzSzLETaRnCq5feWo2wPwBUgmaT4jcRT",
  "key23": "4G4Zck4k1UFbCrzvnqdmAVEcAxU3TmR9tMcjJEQYkA2y9Lh8zDTd6k6hw6cHp8jsrSuXeitta7SaaUwf1j3RsYG5",
  "key24": "5e1s3gV8UFLsAJSR3VwhZHVy7pYyTfD4Zobnyr5d35NEBmYzDdafza1VVvYha6BG7dNgPmPt1qhfFKmUZAphVb69",
  "key25": "59ZWpvSfkqaaNjwGbfT1jgNtbyqCN7QwtUWrWe8oE6deWcCBTaNTpriifqTJGvDV5mq5GAtimJBE3yziTpnHTk38",
  "key26": "5MgGXLwD6txttvmb3pnvqqkP4gA7fEiu8k3WgzGWqKyWgpPpM45RzHh7LDNZFSrL7VEkh4sDbn7BXHSAEgsnqM2k",
  "key27": "4Ei9TZzEg6pMpm8oZum1ftQLDWGsBA7WVx4DmXndmC2MrkZDkFudMcdNvbJNgnqz5MFCF2GeYnn36UFE4YdSaTyn",
  "key28": "3TVWX4ZX5Z7iFVFrzmKQFf1EyokD6z42G6nJG1eHbJAWFrEyjJRPSyEXAaB4rFR9RB9W1JnyHJoeBh9HCtv46LMF",
  "key29": "3ok66Utqp8AH6S55pdk9p1XdjCHR47R4rCHdJUDtSrvZMDwMgJjnBgGAmhAemTrdAMeQ1a8f3MtJqgkUmAEte7J1",
  "key30": "3cBDb5rd6tNJZTQDhLQ62ugPHukrSz7PtDVArzH5XVK4Tt7G28qScfd2CCLaLjMaXbJhQotynX7Sx8eWxFQ1wXoA",
  "key31": "2Rio6qmq5S9WVA39awJui1FQMLjAckjZnW9jZU5MtYhjbj9dk2UmhydDM83XGzEed8cTf5hnZ3kTFoqGcqkmNAPh",
  "key32": "4hiAZVVTQcZZ2QSMxDi24TBy2R2kzxgjCH9JMyu74cVkXtug6p4xHVX7MbpvXA4tKShRy69J8TF7GgKD3CgBMsK1",
  "key33": "4z8n9m6iK8KccTjFUWy4AVkRsKApebZinKukDJjGvqsnXpf2kWDDsd1fNDJeTLEhyzxtcYjwqqp39SK1Z9k3ajNr",
  "key34": "4g4TBUDLXXJWQijyXdpLnniPzasrNcEfV89AtUwC59kAS56hpyBtEXYXmTWxpNYo9GU3qj2sc78N9WvwPSS12FhY",
  "key35": "2mLk4nxgk3kDD2o8FT7zSfXHUoVxkybzV2UheGw2cdbqCtRTzqvV6o4S6mkGrgyyTs5UJbqhk5b2DckKEcqBGW8p",
  "key36": "2KJs8x2QnbxwBiU9d5nVsqX1VThsjHo81Yqx6YwuwsnGeuiGSHsbFnNVveRHqAapLFUWBNzAZWTHMcUCnRFRcLB2",
  "key37": "4LDe3KVXeVHs3a39wqMZ6Vmi9Rqmdnq9BSmEjCwM9xDMw9ugAkFHRVBUbFXjNdKVq9NMw2VQvAU214bZYJT45sgv",
  "key38": "66Te2jDBnASM461vXvATmU6Y6rPCy7cCwwyuS7ev7zCjBA2NkhazSayH9CuXcraPdK4aychFexVayHEFhJ4KJN69",
  "key39": "4cyru6hsGT2meXvSKssgyuqnMmETGJ6bUQ2ATGrsrbXA7XczLVDKct6b57XCr59nma5Cr6A2ECKaMvtAKrNdyZgo",
  "key40": "JcLNG887JasVa1Sr6gfjcygaa6gMJPzRRdRPJeW4RBBheVVkkPbTjsXpJD8Q3trM4CRbYsFDq8KuYNVLjZA1Wef",
  "key41": "3z7etWUCoRAbgqFiszvAs2JxJZozuxDT8kFByVj2nyBdEAkmGtqm7xHWF9PHP9siXNrAZX9VM36muw25RmtWBMtS",
  "key42": "Hv1kT544dDsMESh6foyMmHRD9sGWCaHwvdNiGq41gv65fd7bgv5xLXTjgxNs3KfyDAcVzjx2RUu28BqFceFGEiE",
  "key43": "45VhRq39e5QhDKPpos4BbjeN8oPJEAZQhV2nC97CRVHZnv14MCC5gcQjh8YiHrknWNJt6dqSPGWbWzQ9sBsqEfe1",
  "key44": "5Kr1fcGtA7bLh3uCFrGZsCAYhiDhYnzuK9uiwuh5iAoJJAzqu93dY4JeiGDU7YkAF8L6SJ5S949XgNt9gx7umvwJ"
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
