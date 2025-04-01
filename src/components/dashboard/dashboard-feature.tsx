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
    "4X5HXKN6LUsiELKgLqVFXiTTZqjVy2SSCLtWTPKaWihhgw3TdXtYUGBVFuzj4K1EtNSNiuZH68XDKPPsLd7Rt4bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44BNZS1L3i1NC2TVRwaKo1rrQXUDGBMLmnT1sZkmWMu4EzyPbN7rWEdfU5L73xWcytKqEcWbPcRfZaNQzqTbvFSL",
  "key1": "5a9gPZuMwbwYhxid6Q5bYK2PLSB6RKpEuMDHLZCTrkdD2dSEZHhPTNPKAAVst3ADyYPyp4qcWT7j2vCpzzCCEj6o",
  "key2": "5yDXtramTM43ybLsx4FfynCaSxs9cep3asRL39bjNCkEVZ3ty4XvRjYqm9TphmqhNFKxqy7LBRwLnRBQqtapiQEz",
  "key3": "zmuyPg3LF6ThdoGiNcjx62VB5G8KRgbuykwf1TUTKHVWYrAUvWWE9W6fPWvReFdenuaGELLtyw9QFkj8U8yQX7j",
  "key4": "2v1zXEFswWxLTRoE1ktcQTAxtmjPTC3nt38cpA9yPddQpsphj43Ft3KpohUAZMmzbvhxD8EQiTHooTbDYLZbTUCF",
  "key5": "zeePCPfg1MVkesUtEoh8fXhWEmRVqdMExJJ7cuqz2D7ti3csB7orSL8JoAUTA1SFhcihSJmHmtDm5ZSVWBZngs4",
  "key6": "2FaUZgoFniFuuXmce315QcXiBe2ewshtvJ61HSx3Vs5BV1UP2h5VeNWsEWoEC9HdT9ixQTEztWfLqqSmQNCXtyvd",
  "key7": "3G4389YhFkKMhJ9yxBaUFksD2KmEibpjpzmjzmF9vFGM8VaTTogaWmWB5kEnYHhspfHDoybfwSxPedYuvZJnEq3",
  "key8": "VCYfsfuU69VAKj6h2G9obfr6YMWh1iRoZup7zQkLeUP6uHavqq9Eex4a8wKitnvndNN7p8B8xKSXCnNJALEWgkN",
  "key9": "43YGQBMBpzBLr4GWidd2nQfTcuyHqfUHt7EJNXSbEyaS9jUjVoX2t1zR6bREfFThxweFZ7siVLoyTFKRrs2uKqX",
  "key10": "5zsiqRiVJMPvZcjAv5MYFH655EK2URDEMQSYWEZghWwvBnmuZMHyw5jGMH3Jr6NKNiA1Q2sMWeHu8vQJQ55D5An5",
  "key11": "593db4ZvLsnzbD37Xsb9mva542XJajY27HZjBRZPAQxGSc1eByr5KciBiDd9pQYDBRQnjrRJZ1DtSwzSwCZTRspK",
  "key12": "5TtU8Zn7Rpid7rk1nkCczg4mte76vhe8rgPVqhexkddF95aXGZ7vFSJqnwmPMFt6uwSGa457oT5vgqkMJwTU8sum",
  "key13": "3HFWGUeniq2VwybixfbiymLVZHZBig1WDsPPncjqHP3ryLSaBdNzp8747sK88sWCwc7BUh2i9ugkaucquGxQxVzd",
  "key14": "5bdoVVA96YPz71SBHKxQzEwHQZQtM29b9HGv2PLbXRpBFZTkvE3cjDC783V5Ucm9iqAvv3oitxkVJB8rRSf5kgoY",
  "key15": "4AuLBod4gbo16Fhq97q9zjaA7XFmw2LPikKGgcUDXF69YiEsNTZ6ytuHt5DJKKrSSZSb5GJJatqLX7cTVsnoC354",
  "key16": "yoLS6q2tbyv1N5qfMrRmjukwzcrdtPP8edNRMfCLdprggf9EA294cFuYnv445sMaiukCEzsQBbmnpfBgvmWmwSj",
  "key17": "cf7pmr2NKKV1Qoy356GpEor7k4iYJ4qTsf8DVvctGpGdK84CNtJgtESgTpJ3CKpKHVz4jexPARorvpvwBqjrX6X",
  "key18": "GgMNZQw1oeQ1VqqzQ4HbbH5qf8TiGcySWj5ko9VA53r6v8JB4mM12eRwyRdG1ZkviVuLyfNqWetK4aQWJ3t5dGk",
  "key19": "LSvE3aBWYzStcWSmVCFq9GiTo8jH8iJp9LrV8pP8acdZW3AUUYx5MDvTgpuuoJ4H7WmZBRLn8v4C1m925BniBfA",
  "key20": "5FVt9Jb8LR6fKVCRnmpEBBSuC1QdUYDNNcoWBgHMoKQrHTkyn9KyPsqwJFN9rt49hiZuvxVAYN3GVntLX3ZgvXHK",
  "key21": "28udJQynSi4BVKv1X4MDeNZLDDMmcVqoTHCzLEPaz4bDSSdFe2LPrXdB6RMXdzW8NJbgJwHp7vq2wL1y9W9cgpHf",
  "key22": "3QEBmA9Y6yw2x8YeR1osCG7f2uYMdUZqoHpbqbW8cr12RyUCr7TXUvwJfv5SR6SMa2vaiKtLohmmUdw62trapWig",
  "key23": "3mLyicfPiK2CkoGPP4VmN2haVZSabvNfPhbFYvKLiikPGG5ANXhM9BSRdXEGfTskhUw1bUWgU43ho4h29pkLP6LT",
  "key24": "5mRD8Sb7kgY669qTPRGmu93U6wU8UxqHej45PWCBEc73fPzDZF2Hp1a9N1eRfcx92MP1FiFWyGJUXq6VTcCUUXyA",
  "key25": "5yF2PkurGB8qmzDJCQfCrWGH52dm244GDKACwEPiAWPF2GQobT6ct4ybgPPdqzAA4MWR9gFtt9GEvXJmGgY5sec2",
  "key26": "53AhFMk99dQPwvNXdCTqkwDWiDyZ89vxnE3da5fQuN9ofbFADEr9iqAbfN7VNkjvqCexJSQeXAsEuRBkYCYKX758",
  "key27": "5S878nvgvoS6BciqtAiGQ5ZP31tuwJeyJxEt5FAbi6dvCu784B4vv7h6HDeoEJv6JJzeFh3MhkKRDq8z7E31GAm7",
  "key28": "5Xn5HLjeuCJM32CkXoz7e8ULUCXg5pT9SoPTMi5sph5uWbXtSwnc2zjuwUpYohjQa8x2erCpwUhZRrzphJjdUhGb",
  "key29": "3DhNye8VBDPuV6cBreWFR2MdrqgkkpNBSqbTgnJDA3fvx5nG1EVoCDpsZDFPEPbLA3jMTxvSL372sDqa3herRBaD",
  "key30": "5KPY8GQW2dzGPySTC42Y8hbPCqCUUrmUypk7M4qwwQEPYPqjJkctTPdguCEvgRTLNpKS9Jh59DX9X8BjqkGWSM9y",
  "key31": "3QB1ByXjb6zJQ6wLD79tDp92xEzRi8bXT6GfTwer8nde4bExrjhQgmoUkGS1jisJhxftvb2UwusQZ3BBkbXMCqzj"
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
