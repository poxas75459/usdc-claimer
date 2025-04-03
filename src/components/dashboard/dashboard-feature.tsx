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
    "Mdo4JcL9La6t8C4FzPpjnpPbuTyUaNvxbgJJ97j4v1FHnYX9i5jT1GJA1sy65Bb6Xwwp8J2v1b8rQ799gidJJuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LxM6soAacntxrySkGBPGUb3C93KmugiP63Capfb617V766a63vB2JVyjtPPn8eCDgeoyt5u92zmuuxb6QS8wZE",
  "key1": "4dEpHPT8MyJrWTBcmpJNoGc5RdDopcCinkaGSk3WtM61czuHvkRjhsQGUSas6f6sTVMstKRYakoEcpkU4gZ5cCwg",
  "key2": "3KgC2YKeBWrHtNgpKYnmnpwXwce3b6pndTsQ6zX9S1UXbtzT3Nqqjzw6EGPwVcYjc5AaCgzMExt7otHUZk8szvR5",
  "key3": "3z5mwiE3Ccx2ivgDKyPpJZZAyp5PpzGFykdAhMNiG4dUvJcTm5TqHTx67FxbEXomM1GyFipuHrTi6Jc61J1gc2yR",
  "key4": "2B4Mjm1HDYHGFhK8s8CAXkAAib4FL16BX1VDdu1CoPFLF4R8GCRqBTLHnbtMWDwdAHNR31SuYQVATaQR1D2nX9k2",
  "key5": "5A33NcwM7h9kvghPgbaYouKqobGigzc3gUkYoEaSBntJUx8q5z1LTtZczmhgz81ctcxQy3DPLyYppjQMmNS1vLPS",
  "key6": "2xsBdzC4TR2drq8H8uchtA748zrKanbHAmjqeor97kyNhceuw9kUgJLVJ99fLJxQwfdbTjEaHgZJZJVNoAWr2Ue8",
  "key7": "4ydhXDmwGbFg7qQ28VG8NrNNcVSLekjuyATDcNhEaLNg1dRAXy73XRyPJiWyczQYkmc6GmbyUt2qARvs9iwYWQLr",
  "key8": "2zCtuxKCaEnfZDU2oWvcWtkSEhTAZzqekTTmQcZeojvxr5WU6HFyLYbCqWCmwreNqwiYiYYyEJcUEkHeMwSWKbaK",
  "key9": "5fKsGJ6kyXs9gHBdXzoXajg3hEWmZNDcLNBZ6auaFbKJS2Je1Z66L3jddg8M1o1jLpbgb5o8X8Fwn4bfeWiHMgUb",
  "key10": "5wshwyxcAdvVs3yEE47HbNWFbrCbLHpvpzmY4PH9gbVxrKEqw5dv5N4wVN46osEBESszRWXxQosKigduDduMNB43",
  "key11": "5QcaANGj1ogq4aNjBYrD1Gv2ecuCiD42aH8reyMQVfH9bk7eVCG4VwjgfZ9u9Q53oKQZc3VrjcttrfrVF6tW8r5Q",
  "key12": "4EkMaMjVGTfZLL2Kf8nYBD7bwZXbCeuxpZMH8jtNT6EvcTLMKR14RDKeAveNNZ9BcmYmzsjqR8cWAk5J6oD6Tj43",
  "key13": "4szm6Dmmc4fNj9wMtHm6msi3xAbH8LqbrSEYmEM5f6GosaHC6WeWnW7SXconTCukZy9KMqoZfmUhouhUZZH2g64h",
  "key14": "C2JVpyaG2CDQ2Rq8RKCX3FrckMhaLXxWu4efMzBQrZUGu8DNRjEgWCbzJqWjQRJduwPsjhBX65inzLbj94u7dTv",
  "key15": "rD5eDYxx7p8rVhv12h3LjzWGpP7LdFRk8c1rrktSS4qB6YUm4mJ5xoPUixLeowqd8YsHj7T9tjtR7KmrwK5L7eo",
  "key16": "5DMoJucsatCF5RCbGzP85sV91PRQwvZsEPX8JZPcgw69SGerHp5r1ioyPi8cxWLFWAYGF88EFALCa3dPeXiQ7nKS",
  "key17": "5q3sm4EAZJafo7kdMn1jgcJNxbvLY6k3LFbR1meirgov3QRXuY4bp6oEqULpnMDoYh3YG88GdVw29TKDsR8rfGyG",
  "key18": "VTdqbi7RVyqHaw9ogVdJBFb8nPeALrPhFQBd6SdKXXyBmNLzQXvAP3esFt24SSNPMwq9RDqbSMCbrF8vhCkiqZt",
  "key19": "4ZJWZo3pJPDp3DiMRyjAPcFboy7HdzHcytqaPfGzTBYy6cegyPYmvw9jNvxSMqDruDuYRV5SXAqu9sXf7oiqA4Su",
  "key20": "4JNJzUh5BCfKkuNgCaqURWVLnc8iGXauxXxrQEtWDp4484AyitQ1DcguYZvExT2YSehxypWEpb6s7AMfbRxFU1aL",
  "key21": "42GMAyA9yoU6d6t2JMma7xmaSifUBFYM5jhyVdm1iF3B286CMN52atqpFr9aNAk818pXtoMfUn3vLsVwTsgSAZjU",
  "key22": "2PtQZnsbParDihvCsp6MC75xeCctw4kxie5gSsLehK6xm2A3MMTP1jjXYPSkPAiW1Tid8B3Wx9hd2PBDnLVYT86R",
  "key23": "4CSrjmmqbUTm9nTcDtA5o6XJg1YN8t8WL7mzh98iZ16Yr54MLExdzbDt67qG9cKf3vau6baA6mAQRnfX2kV43QKx",
  "key24": "2cyaYeLUpAkdpLQbhTh8hdmeXhU88KUnoQNUHeNCFGnRQqT8Fk9qg6PNV7LeDkw4qEwS1VrfCaaH7dVoVnj7CSAJ",
  "key25": "4LJ6Q16zFoFXKiqgkXZ1e4iUuPnrVSXBpCo3d2ss2xbCB6ZgZAp6B7mUfGoFjB5g7umQbU1AYr4yiAehXTraJ7ep",
  "key26": "YSHEUATiiDNPN6L6i6e5MMRzjfJhktHn81yf9Y36gUYa1Gyvof9h89mAVYkJXyfab5TEXFb44vP2BmUZ8WPwqQQ",
  "key27": "34LppT9kFRH6WFzzze4suiToByEg2GB7XYJM4BRMk3m3mWqPPMKNeA9Gj4atGEHdn2jKgq6udtfTvQY4ExPc6hnj",
  "key28": "4EYeqdxLwjhiWuFHCFfHRvmSZYkWz9tnJDD3Umow1BQZYyxh2nSXfj8a7ekfoGRU5WMavA3bFrZvbM4ZC2EYDijy",
  "key29": "3iEgtFc3WYNduxNDgjVGsrsGMzLaxg6f7yJYZPEYMbvq3iostz8ouKXFCDqo2V5zAznZwb7wZqpBZJTSt5L4VZPG",
  "key30": "5dqQWFdQtmdAvUZm4iJbe3QvKGPxbhomTqgs6W6esuS69zfjV2osrZ27ohgWQeEXjfpv7ocDHRbnmRotMNbBw4Xj"
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
