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
    "2Z9FnMwD2nmbCzThuJyz3FtTWad5F6HL94RYbsCUTatSfynszbPfAZHXeC1iGoDuE7JTHWGqHw8AXdvNK1VRvyPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTHLGFrMsgjoKsrZ2KAEo4uuicWapJUHP2aUB2y35E7dp6DKv6FJYEJWnCZQF3vu52ggNN7rfpBrbUR77jf3UdL",
  "key1": "54MyfyNWj3S97yB5ugeiYG2Ut3KVJLR8ioZH4W1dcDxqFD4FafM9BpULbNZJejzNkHTssjdy1Lic1cSvNMp5e4kJ",
  "key2": "v9Yz1xY5AsC7cXiZsFTJKvpHRiVFZgKEne2hWPXSQhuTbtfg1NBm4E1Sk1yUKJVmdSU3w28ZCtiUouA63LZ1j7m",
  "key3": "rL2d5u2j28tyeG98sUog2oN4bnY6v81zqFzUhsno877LriVbNPNn3vyu3AMuAGwtK913kj39GKh3awozAFtJHWY",
  "key4": "2v97uQ6yJxy6aV45KhMD5499NYCf3H3wYdyZUiFeLSG3mQDtCK2f4VF1XJsMgYoVYhJvqxFmUk83Xfd5ZwvGz3Bg",
  "key5": "31WaR2c47s6hyLdnzkmUVPDt5GTD7RnKiYe4RCFYCNbMnMwftMzU1knA2TdZkeurK355vEtXnCkTV2eJAcdzncTt",
  "key6": "4o4Y2w8mUeP5bkwu8BfpNg8mSYCGMzM9DfRUe8VB1dysufxF2GLvGoifxW77n5N1YRMsSKaJgar6VWddFRzUjgZi",
  "key7": "5GvcuZvhsYwmkVw4K3j2kybdEUUYUKM7GxWauCTbJwJcdF3wWpZpGxgm2opXYYXcMd7dedtCa9sBrW2LLNRt8qzX",
  "key8": "4Vfbfy4ZpByCBGCmLvf2QhLFcNse1XHiJsj68EyLFwbKvdefnkAPbNzaFC8qzQwHZ3dESDmsYa3fwYxqoZEcMdQY",
  "key9": "5Wr1PcayiyrhYYqdnierdbXnymcGtkiwSdyJqXguUSSRWKN94oswTXku74xQSpMhFGXPPE1uepyCDRNRqZe7ecBu",
  "key10": "2vxpjrJpYZqHdWS9mqsLBc5sfA9ynchE3PmfGcWSy7cnVFsDcTiGkYQt6Amh429iDjoP6pdAsRR5Y8wH5vrKBbYW",
  "key11": "3qbvaEFREGr6NJsdGMh6Jp5acXS441KFL4YJN8KjAtUDQB6eDts61yHBhcm2DS1cUwRkCK8ggYV9KoTtHgb26YZb",
  "key12": "47cJhVPjmSjhoD18qiCivZfzPXAwhPdYSdTSMQgwMpxuk4tB48kh5kj6CEVcd2yjJiYVfWibAwmxzRZpk1BJ6Xdz",
  "key13": "2CU2qh9ucmxtS93T2b2HNxQdsUmntZcSPx7bky6KJLT7VzwXNMSXrRJkC8jxpTwCDiQNTSeqixHoTzW6W7gk7nCJ",
  "key14": "3YEbbkBNdMvUHTVexqhH4jcV8kmqNjGYEJiUpek8V46FP3SnwMNSN6JY6u8SsWnV3JsE2TMGuGapC872v8rF4hdh",
  "key15": "2yiUFnBbCjKqxRMqdvThv3XdVSeGX5SBVyQjDeBNF5GyFsC28NvdAhzqdEwPBqVeUytRBP1oDSoPHfiZK6kzR9ig",
  "key16": "2kErzWRdxn7cv7SQeMnXYyTygyuJXY9u8XMxqByxrqWjS2hdmm7UQ6mDBZepVzAbWJnCVbRWywyhSqLaH7mQE1JV",
  "key17": "3SbVEAxzm2W8xEgS7XzV7WJUDhV4Ad4c2MpNUGurjQDcdzVp7CR74LBAY2vSZhQ8XFkZmztR5KJQgQP1Mh2HuL7h",
  "key18": "4eaeDFnytPC8xRY3Z7qGN3QGVY89XEuzFWtJ8NpgKLozXgwhR1FGNKyb8sB19hi8bKyb9T6VY99e5TtBM6L9eh85",
  "key19": "nueWukRFSn3PS31Er16y3sbWXp9ajrhj7UKXkvwAc5aGveE8VaPwSAnGCzwogZSYhoQVZsoQvwpRSCqrRhwcrVA",
  "key20": "4Lst7fzWHjjSmmpQWScWyWiBTNiduGGshKNdBLd1SfVyuwGVrEZP8jUAMF5AMdg6MPPiF3jFVJ3caMgMC6MZ2NEm",
  "key21": "4xtYdkUSaEbyFET1yha9VTsDYNGmHEUs231jAKLG9r54ipXSTgv5otpF9KEfLmps2CtikadcH1oPWy9hN4oLQBuV",
  "key22": "5WiuD6gAvN13o9rPTXFeqBYsw4H1va4FrWUMAYyVBvqqxaALNktP7h7MySiQCasDDsxrZzsT4GWBSNY22z8D5taQ",
  "key23": "xUsMJiEDtNtHvQr1KJkjTkKCRPg6fNUzuz73nrrc42P9yQaoURUp8zJTg8FZLFdT72Qi9JJ7KN6HBXtR6w7eNEc",
  "key24": "4nFnHfJZoHLvwcYjFAxiymceVu3gT54X7PfUUQoe6CxcvXkeCMSkjBWmiKdBUHM6vz6DrE2y3egVCP6z4BJ2WFHN",
  "key25": "39PkyHyoKmahc4VxEQi8xNqbW2Y8GfvWa14bntLq6jjSW7YwWTm4jcECjTvCz4sN2XUD2PAdAkQSisVxx3s2ibDC",
  "key26": "4YpaHBNG53NizB8j1SHZ6fabNbNaxfYJYM8DCFNGsC3CzUeuRQUBZPoWtb3gFNH5NeZbn3n8nimJVPXhk5qcpbN",
  "key27": "3u5cCY44B8RZBjyAjQc8wVyHdTkNzcVD3bLA9Swq2mURm3xtBXfS9T6gzWbYYfjbNzG7TqC1cmzdKTo5q85DEM8W",
  "key28": "41YpQcov3oTPwMMAWB58uMRe4Tshp6ZNvhtSH2ihjskpBH8CRmoBbBdHaoBpuuRfLtxFD1UUz4hwSFysYjrhg622",
  "key29": "2JLh6WKueUX6uWdpCjXmNhbUtrSZeWdRKjMUvUPVfiJZHBg7XyV6eagYvUSL7n2Q3v1S13mgSHtoicwRDvxpZ2qV",
  "key30": "34omPxdK1UudSwBeThzTFdTDHhs8nUWa9tREEV6RVRVN6jQKwN5s6bomQPTnFBX5JHYqj4VHPN8bGL855rMWiCaF",
  "key31": "2fvVinfDsSZ8kuNa773uH8HPVdbF8kjTDC7VADhK2LeS5aLRLfdMBNxKm612m95ZUoeZ334NzVkvqavutr3BUmr5",
  "key32": "5D8NbEphAzQkWXi6j7yQKHCVuZ2P5EPJUXJUyFWAUPBJCDaYXw8E34hnMiksL9CX3qwZwX82BVDa8SsA2a6m1SQZ",
  "key33": "9CMg9Ujo4mUWDdjN28kQmMntAB1xwzQW1Jfza5GhEmFwXmfXbi6rFK5mYn4yrudRA5DuyuDqeDg7d8wJzaPTbbk"
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
