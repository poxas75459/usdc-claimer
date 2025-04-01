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
    "32AUnLgqviL9GwNaUvouwJzHStcUEc9XDhemXEYMc7z4bgW3erH5H1nRFNqK3cJxCk6ampq3ChB2YacjNfXvEmWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMLRaanMhDSZna9UpDor5rAtsEMeX2HGLzropeKSpf4D2NWJiRd6x1DcRHjhsVGkp36ZWRboodfsvNYzESCGXTa",
  "key1": "2E4352JFoUmrLTzXQk3zRmDdkBo6tj6cbq1496LackYCmKFjqfNiCr1B6RZwxVXP9HYPsRDaBkjuhCEzsqaNH6VM",
  "key2": "2qEkMCeXSdkntqxxyjqiaa8Xgz9LHSioHYPEphbMBsBubgbHwgNEuQuu1A4wfDnPo8Ccythk88n6mHsCyg3VpyMK",
  "key3": "8uVSZChqarXqZhZeJn7ddawaxUXTNtu79S3xrPpJjPapjUhfYbmijR8gLcEodfj4cozYkWdqjQjuYcA9mtNL4Q3",
  "key4": "3DkneWstDg6ZC4Uaigv8iui95zf3Mze19phngcfzVjva1RPGcaZWeig5FmYNia3Y28zFdBRTaD2znNaVphBff4rj",
  "key5": "xySestxfg2DhqeCyMRoFyuVJ3rmq2x2t1eXMKPQ2Q8FGBHX7Sv8CPd2YxT33HNbrqHfneJJ3CTKKU5otrN5Wb36",
  "key6": "2QjnscXorXqZsFLRMkuzSNE6KA5CA25UtWCnruzwoMRq87uTunYaJWJRphkiTSoS6Fhm5kKp7XaFAMDbhHCG9osj",
  "key7": "3saDJ6KxoTgPvL7XWJ8PSJEa4zENqDcfBdo39cPran2UQmCNxBrmh8ASmeT5DxAaDfN4bJJ2XmBwuSbk3AuixMtm",
  "key8": "2TiMxFJuefFMNzCSiaiHs27roSWV9wqnjvyCw8WARALBAonhiGgUmnpjb5AcNANPRbCQcfKFZPcyNLuCZm8zB6do",
  "key9": "3GRUaYLc8BYHPY9LLx5dPhLVcKqVLumM2S3oQnZNsn27kkbc6YY5xXzNnF27prTHLxFHJ58RMgRzcr6LaTAP4Ku9",
  "key10": "zRe7eZcg9Frt8ipTQdjzyZ6yQZhpNCHMunpRYKZzXreaCYpRdp9eMuS7aZqy8mzzTnatayfRGpkuRRLFsrJBtB7",
  "key11": "4vL6zVcD7Y31vNUGLu2jqwzMqQ49eJyFyRHXRZuQFXJsKfRTEvbqhzXM6PoLpbSYAbhy2uaKvAQg5rgUc3kK42Fn",
  "key12": "67kbwK2YWJTAVrcpNkVbJcVvQsNTCHHXmiDFoMP5fmczz5TisWktaeGy1betP2dL3LktNiRF5v3Y9S3hJgeQtNAc",
  "key13": "aeAk4t3dh1k8PRkVRkeZZvKUvLFfM4dzRQ3XNxm7EUppLEqGkS3zTzwUk3DanPZhJvLXonfKyvn2bNR9uP3vWof",
  "key14": "4FRBW3y4kQuqvh2ShXfdNeZmCL7QSkCdmysC4dgjfJ5Dy5VJMX1T22Z6SDbzVNMm7dnh5Y87g2jQCyF1NHQXi1ae",
  "key15": "2MENFNhe6NfiYgT8NyPTXiGKs7BMsseJ3y5SAbpRU9uxwGXZ5HzoaJVjU4U3J71byYcidk7LtPaXCNqWG6MqakPe",
  "key16": "R3yQES6osKATZ7qustWf5KCbNoWpkcy75k46Dd8DzTq7xS4FWrLukHYkd4JURK55bNPxjRtUEXNnvd6XPcqccbY",
  "key17": "27GTrwYgk1Bh7wNa29W8rN9va9jd5PfrhKCEpdJU1GXkU8cfmW99nK8fCFFmPvu9GDq2jhtzemLUPApGdybfzkcE",
  "key18": "3grVzhYR62N8fBPAkJjqUuMEgDmbJwBU4LhHXdCuwzfyXYHxo19Hv9crkTwAcwN8EipQdhdeZ2BbXVjhErHBjHUB",
  "key19": "21jkTtHLuU6v45L2aggpGE6AEg8ku45pbHAkYtuW4oS35QcqaMJgftYTbHC3ANYoZ9WhVA9qNe9A1tyfS8jVehpZ",
  "key20": "4w86pkh1vzHziX346L6H69An7WZ5A6oCLrCCYpdknnNvkMDCj5qDuCrSk6fLGyde1zrGjQiJG7Xaa7tVWWgoJKbW",
  "key21": "3BmnWfMvn8oR7GMMHeCm1RHwExgJ7LFxs2kDdUDLxvLht1oLfdTN2Hka2tKtfMjwf5EqAyZv8B7VGGc93sd1iRfZ",
  "key22": "4Xdr1EioZZLxFaux12rdkxkTLNtoVysbaNYjUXkJ75kp4RUqdJqVww6WcwuH6GB9ZEJUvvAf8s1RdUg8rcMymWCt",
  "key23": "2aMfEtdXGahNwiuAF4cEMDrM9Kc2QwKyTLbcpMfFvq6ay8WSr71LneRufiHsewNuadFkbetCu1WQJkHp66uazz1",
  "key24": "5LQNui6J1iCokt3Dj8Gedt2CHrDRPR2wtsjvachzw3Gsqm3oUcL2H1asXSs8HnQbjfqFNxgjz3qLMnXYYNAguZ8w",
  "key25": "3inCxpxMGQjcz6SC3bBomazj21fkxahLg41d1RAufaAZX8CTiMutMymZQDgdVb4onnJKnDk9M1Vz2oCdB2dYqK5b"
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
