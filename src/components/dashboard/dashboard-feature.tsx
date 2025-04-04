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
    "nGeZoCVJuuM9gH7fces7Fs7Kj8uvbxJQ9qBFGNUvowjCmj6NTBegb35Mb8rQ1CtwthgWefqUbEzx2eFkTT4ssVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMydfYruBmbNMMoKmNwVAYBYXgVCydXExD9QPDw62vgbuEanUtMXT1AsYfbnxFAV132b6CZVxBeyC8gZBFuXf7W",
  "key1": "2Czsb9NP2pscg9a76r2idoMXpQhM8LmVm5z5Czz57F7bdrBvusudiYx5rbWGE4EBS4eqCEThxAEGgpThp9sdVyE5",
  "key2": "2FsR8Qa5vK7eyEdydWAz6ATMcmXHVQuLbXyNwKr17893V8Kg8jt3cPXPDmhFz5GA9tNJAuYU1YJ6x4ZZjDvxnxUb",
  "key3": "563tr9vCYJic9NbTbRQcKXopUXSk3WZ66j23BpQ79WmEgVUmKn56M2zwQq1eos11fRxe6T6i4yfzrwhutJxDmHN3",
  "key4": "4c51WHmYzxRwhAYZPyhnBxmRN6jXBvBJhfnAc5uyuaTt1qCvfUJmc7zt7Pn547dHyrSeNHa7RjiC8HNHinzaYWBR",
  "key5": "57jVhhx1RDhm1wPSSJjM9tW652yCV8t4EzQdSGVferc1kTJFmFmFyQMVkMiPVXj1dHTuqvudJX4jTUmwRB7Td1fR",
  "key6": "3qFWSEuu82Yhn9LSYZ3SL1bjj1V6z1hNFjyrJbnddbVg3tLDzsCasrRJeYY3cnaehLVhwpyyJv9AR43XgreNHBjN",
  "key7": "4xpWg2tGQAgBF5VT5GBsaVjDtVbmyfjMzfm7qgCwXbrXX6ZZLZb6ASoYS1NuPn5A9HJdctwQmao584wcsddH9Yn2",
  "key8": "2p3ka9Xm9ZD5PTMYmUdt3oExCfduouumQ1rJ77Wha72Tb2PZBuEzUgLKg8LvwKqHvtx2SXYJTa9uG9veh4piZ4j",
  "key9": "AjK5oEgep1hBe5J2TgRwB9eCq93qqBxfzfjzucQdx23qhn4hCqM7g8uUjTGBegdLyWCMbFtU8qxVGFGs7hTbDV8",
  "key10": "3RqwwJ7SG2tsg5XBXdbasWLeyoAQmFiiiz8g7t775NQfSDqs5fwQJUa1u5rSs7e4VXny5KkrfrevUmED615gxV24",
  "key11": "LArmRq1PpqNoZKdk2mjWyEDN4micQm3Nqco8w2vCsimWMBBHCDQagUE9z62SKguqPeySxPzN2sqgNT6wBLimtbx",
  "key12": "4YGdwY7r3zqDdxd6jRE1ZKexusr4eiT5qni28m4jJUstnK9M7u19gK3k3XHEZeRwRfvKZa5eHU1hVBuahM7q3wUJ",
  "key13": "nWMZNVjbsGrydV7F8s1LwbHxzDqAqXBjx9VUxAVKcQpFXkvem6A32Ru9MXTU8D82QgnDeqFyJCtkbgq46oLJ8dN",
  "key14": "4HcsJpYVEx1kozDE4UceyUsuauyeQ44dnMzQEc9wkza3XbzfyFU8jApAhDhXdovE9WX5bJxqCquN8kgXkbmEMkLT",
  "key15": "55wfBQR1tzcp1sDazbx6hNE6qTc1vXxY1LsFiwjQTNDtE4ssNoB9Wbqu5PhbL2MsBacdb1aiQAKx9ku8HZcto539",
  "key16": "4M31F3652QP97CcogivS55dzfBpc4NMmxRSoHQ564Dx6fxH1FNfPcF3NLzWZBu1MCgREq57P6kKDHQshkUVNgVtY",
  "key17": "r7q4KJv5PfYU3EDRTmnh6A4ZYj61yLgAiLyucVgvJBK1tyT4vtn8rXvGQyH7DKxuiQRzGdG5KQgcL4ka5rV2agb",
  "key18": "2ncj883aXHHLyze7icgwKsw6MRAgx2S35PhEzCGrUfV6qLDJLu2SysnhGdBJikfkiHQDNuja6Wq3PWXntQzh9wpU",
  "key19": "3nxYYbe5rkYKPh3QYHE84k2WHFQihEQ4oaABWKAMtBSLtG1E6TPBTwpNYWQaQQG3rrM7ieXQMNZEtNDvGTLkR5xQ",
  "key20": "4BhP45YAYQTTRFNpH3bquzovAgTMkAysHqEhiLKfXMMZJxrn6tJVDcsxXprjYSeQfkFk9XV3ogUiCE3vWogxsSdr",
  "key21": "45q4rBqq4k6bGRi3N1Uq5htBxs1rAVYZnEHoCMssUoS1dHnTm3yoA5MEqojRZRW34QtnBUk8cWDofNKw4Cg3F8C4",
  "key22": "3Zzdpap1fMoKB64LqJfcqucZAo3MRRqdQTinyaprWpePHY1U57xirKHnLoMJ7hopC1pSF4ommTpvKAjqKEE2WRku",
  "key23": "26VSVsuYh3CmB7KH2scGk3TqZxgEuuwhX3STVzjU6NG3TFZt9ag9kZ1aoeFttcEifcQz24qKgTN15C3U6Nbmi7tw",
  "key24": "2cKoqunKXBzuPMjRqc87HQfheLc2BGnStKzFNsDrEwtDoroq5MbcwoyvUBgsEkHCyWCL9sif3MAnnxzvanHo3vgf",
  "key25": "5L32T6QL9Zjuaa6jJHtrZwvM5Dc2Tc9v5nkirv59t6HsNp4v7SRq12w5Kq4UMLyQ6kerQhiW6i1fmYQRftAqQwpN",
  "key26": "3yqN7U6xKCwGvc5hE2vDpHTWGdgt8e1Szh2psrRQWVXR6aD2yHQU8wjLzkcKJYWJjQxvbpgSkiFkvnaSPWyfrBud",
  "key27": "B6vGvmCGNX6qg53uajRVAuPe57roZcJ1nzJEscHcBydm2UtoVV9ifzKpHv61PmubB9Yf86XsPao61oaxcWYnUJk",
  "key28": "A1jBgtBgP2vWK95vwkb8HzpsVD89tnzs93ut7PbAdAbYLaRBFw1kEc1iQN5ae3VLJRPdeG8dnaqCdmiQfJXEG1d",
  "key29": "2FQtT6dsjVcjP7vn258BQH2WC48UiCVN4scCy8TkNwUtETYGWvL4XdirL8j6JjaY8QmpEhMUGsWZzs9HEbnSni56"
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
