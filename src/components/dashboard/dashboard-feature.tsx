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
    "221uP7sxpYoeo64GEoQx61QSFe231grkvVNQf4hufkVG2KfgowLSdQM7JRRR36thHwyDZb22nGKGCvkDa2EYDjHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GnS4w8V85ak5cxxzWgqbiHezJCbs7hWLHRc9e44zwGtbYBK8rWTM4T8PNJNmKh37bHAS73FFGMnz1tLaRrqbdN",
  "key1": "2VeyWAen81HnUywUKg3PtUa5Wz3Q5vtkqVw3XPBPuyeGcHtypa79ExCLERxpow5yXnBNLj1aiKBjv8P1UNziuQWP",
  "key2": "2RwSMo6ensfCyh5vuKADY8t5yCn3FsuYNE4jzUcyHE5oqgSbsY4jyfxJjexg1zqG7szbAxYt8pxGeKh971c2yK3h",
  "key3": "32hv1QuGq7M7iMMNnBb67rJKN8GQ4edwx9MamqrveoNnv8ujWbLGhVmtSm3BByKuSC9d8cZvgzY3JvDgsqDaUPy7",
  "key4": "2wPEzCWqc2nMjxP9kBiT8qgN9jnmhfSvbWLw3qptZyU8mr3dUZKVmyVjntZDHhE7go8QdGEPre3SKyuNe2y91GkR",
  "key5": "3tvigbrVD5Ge4gGj2quHNU94UQyLDW9JZQfQoqfEapWcs7rR2DHVkf5xLQggUHywk3tenpMQYq8N8CNqaX52xfWH",
  "key6": "56dXEhDDyzTWz5qFV8HTVxQuzbjA8BuSK9pHr3uCXyK5eQMTngCRf6NpAtaFmJWv1WUvTMCmTKgK978Zxt1CodB8",
  "key7": "2MsqKAb4KJ8J1UpcLsPTNVCRxfN5u6s7zTuabx1898zazFH8rtshU2znxyzZsvDv2Xg3WoBbQxD89WhvbViNkTiT",
  "key8": "63UZF1Ac8JgH39Qy4sQQ3iF2X9H7hos96qBQVnqtxzgNXPmfqgStRFvu9bwSWAv1isPGAVmJevQHMghorKwrDy9p",
  "key9": "4WXsbK2oNBCEiGp2dZgoJfVvdSXUZL7hnDXBTteieUGZZwiiocDTTdsSsF9u5oP3n2MMujDozuub9TGAqVFgkNPF",
  "key10": "54dxTDRLivcPMgTojx523JnhJGGbxtrebupnFXM4NvYyVrtzseg5NHkH1JQUoCtGXaC6fDA27vo5dVZTX8U1PVJ7",
  "key11": "4Wftkh7U1bLY4T7vGyuy8spDUy4yNxycGzBVmNrmJae45wP8Mxmw9PeHW2bwVA4CaQd4UFzvs4KdwrDKatjZxBGf",
  "key12": "5Q5HkgdkjCt6JRLBnERvaSosrsMyxw6ELPTJYzeWCNutVxxU3S8EgbbpNmwjBuBcv8TpqdEqoDqRScL26ZTdghWH",
  "key13": "3TxTrhWgicru1rWChxsmYUbCFGRuSEmuThTo6QipU1ySh7AkCs6JEUTeFCgH4L8Aax1ELVaFHQ2YbusDRcS6vP1B",
  "key14": "5RfKekJftfVfxeko7m1CtCoCHZiJHdNyAyfGbKs993icaTBcaL5PzLg5EePUi6EuK6EAHxVPgHWmoM8uj1BUDAp2",
  "key15": "4vQDvfXG4dJYSuXuHcDQ5Jbs2ZA2bKzPe8KPV9MAeBwi246vK6SMFQC7rXapiUK2jsYe99xSM9rNWBL7pVQNvQrB",
  "key16": "21FKze3LgUFS4Fv6CfZyzphohu7twoLpG9qRy5QbFAJHvv5CwqaZeZdeL8KNJB29Ru3iE4JNxjT6BLWLtaNikqR5",
  "key17": "4i28p9A7uoxCRB59xKJCenjP2WoQsEEqeegUdrR5JyUcbnsK7nrXNMCwFtFKvnWQGTeYcBfeuzgNNjf9cuWSaA8P",
  "key18": "3hL8YxBeHkjeHazV6CLK26wdFQP6cWtDmaMtd2aGVnihniHJqdgvc2gdxhP8EvesqdQkNTTDHP2dZGoiCHvGGr4F",
  "key19": "WPSQnFhXhwMMcwjXu6f2raQ7LXuw23Yr3czQrSq3QoJWJvP7x9Q9FF2ZZWYArzTRfdRMUWmxhcmdPZCRciYmRic",
  "key20": "3W3GMPqm2XTCTqwtSL9eh3dGAGPrVMgUcCKsDzGYHwTbNjmchSB8A1Dzwd3jHTZiWdVXdaL5m5fCDsGhjU9HCAYw",
  "key21": "wTb748Rd7TuzNNXG9TTr82GGwF7XtH9r3HZEdZzsoM3Cw43SfE6ifgowXLmkrujj8vWcQcRL1i1hcD9w8NG5PV9",
  "key22": "c3Yr2iuNs7eEHwno2biCZF8rQa2P3iskjQEbJJZwQ6bewGrWMTfocjeeesVGhXRZZnNsJwEfeHLNytsRco2dRCV",
  "key23": "54a3Ks2dQGe4oNxbnEyFQmDvb7abx9dUaQ1feKWkfXk2G65GayeCHskAWwDocw2e9TCqQxoapV5M843cXmArreHN",
  "key24": "3Wew4sEjF8V2q8MXjvRSFSTNNnyzBZDkX9HXyrbhLfGhGzYDzMLRDRc8kxej7uCRzCD48hXMXv6ZSrUdj5a4UDNf",
  "key25": "2iXtB1ZD9HpxWnsdaxrtLDhMi8X4vCp1RGRAosn8KRE1u1o89nVEp4HrdGQNJ4jpXmXk7GsYUcedthAJFXGKEUWx",
  "key26": "62Y5bqmi61jdbW4ubGiqwLLM1ztyYb2hkjLWwmuffQH4TRRLiLShYhBu1ZzxcqqE6kFNcLxe9N1ixDjyYEKLzVB5",
  "key27": "3axfbJhcfgaDNMDuhKY6Ma8cigPxMnVZrVSfvhu61fcBV5HRVRcyJEMKjziQdcfD915kJzJFvVVQbWVzAJzBMwyq",
  "key28": "5299nSLuyUU2BkUhvLnRJmBuhNkkJxPqNMaZ8gaEjmhSW1SdXi9kELcCCzy85dTVgVxHWLC9ZRpxYraZYXJB3YT4",
  "key29": "4XsHhcDsdNrqzSavoMyeDQcGJJkWcRsmkdE15nE8mJC8WuwcGqanXv3EpemisUpmQaomzLaXXa14HRy8N782UqVC",
  "key30": "4SCiG7xK1PDnz14dNGsZzGfNu7dCawbBmFmxb17ca9tqhWktGsAXBrvARg7foni6SCJ9M8AYkYM5rV7Cxk4fRX1d",
  "key31": "2VtTzCsr3Yjk661nvRRmDiBZfiUFZ8URQAsc1mKQZzvQrCa7MSDTMoXnyVhHWCPRcoFsfSEfBaBzEJr4Ezi8PxjM",
  "key32": "2SEuxwXeavp2VwG5Pg37vWPxWw6zR15tyENm4oH1Sj9BqiLS7hz2Q3L1btqaj4Uqgv7Fqq8HE5BEU3pEP1mBy34z",
  "key33": "65FD16SxvQba3t1F67cTBoFs1DKLsKwS1QmnXzpY1Jsi3ea9j15NNvxzjqojH4Kz33ZqjuWuM2Wikb2QsgLUJ3Ty",
  "key34": "523teDR2YnPMxKxfSqf2bgU1FNVPaHv9Go8XDBJ6uhA71VMrYaEK8KgmGoHVBauu72w7YYeeN1KmegkvEijoZcza",
  "key35": "28Vn7NC14g6bG8daxadX4jV1pSTjJA1WMMWmNf9tKzuFLJ7puK4TUQ88WgoKF5S8K52R6KoriEiPqHjRTnTcuPmo",
  "key36": "33wya6BXgRn93ctHECfZpoAopkXu6LLNy3L8GYYheAo7kcBWJt8fisaiNvyfUaZYci92Hkxu3uam3s2BbcmwHLkP",
  "key37": "GSdp7iRixyfEN9LLbfiP3SRG8gBwE34g684Mv7NjUqKwC98jhmTN1w3bsTeaoSfU49LynDvDHsNrwTctLoQYTZa",
  "key38": "4XaPX7mZ49PDCaDFkhTY3YvndNWbJWrQGUvBWkA5GkHzmagVkn4bRfDeA7Uc1stu3a11EWT43u9cX7ovkSnTYjaK",
  "key39": "5fqt9HDMiUnq9HdqePHdRL5PHdJ3ziJkePqvrxSAyjFvpMTyY9bDvex5h6VPcErYH1NzrT1quQKiMrMFoTgUsfS4",
  "key40": "2P44Ms6YUPZv6BqvMXkz36xZ5f2eT9Y1mfEhE5dGL6bvJ6sJT5kCK1WG1AZZCx6fJ1pmXuYNjKM7TtZAdz22JHXG",
  "key41": "2gXR669kLDa2vY9tL4V5sJKodxfNxy71MDyK2tsATqCMmsDtAid3WBsHW896a4qfzPwVjSVpkZTgrmm4sjUUjk6W",
  "key42": "2ANrhwkUF4LWGfoeLghzQP7Uh64ARrnM2pHpqSSLT8jSFyNEWkqMKSe9hDT73LpCDdoUL8DdncttCMETPgypgUmG",
  "key43": "23n65AWvB8x9SERCN81T1CsXjpvs7W54sd6MGma6LuhDsYuCUajqbAknrBT14hs2q8qka2TmGdELvJSrwCVRnE4h"
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
