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
    "ARLDHC3E6D56zp1APYKZp73QqWxkZz4Wr99dyZApsMrGt2Q9B4nRNWtFBCevAh2oWEnCiRh6a4vdXzxwFWTdwwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TfoEQezStPYEgioKukADNqCWiKCcTjbanGqwRZWAPk7KLNcf9yvR65pNjG8S3x2A6o2BEhVJZhmhKp9hHcQvwJT",
  "key1": "23GQ7YcAWoumVV1yvbyi3ZyocznCCMpn7oEXz5sbN5qG2eLff2BcmHy41viyKSyXyRg92BSFgrHd2Cioq4G5xw4E",
  "key2": "QZRD1rr2KpZ6pU6g15KAMBjTnk1q1VJPw4MwY419BBbeMGLGkaifm29RBMW2ewZexKuf9NXXojtjXPLUQo6bFdt",
  "key3": "2GNsid4UnG9yhrYgPkUy5KwRHhCRcuSweY7EYBaWCxGMBcb87VC9FkvVmLCiJeinV5fVHCpyngkZPWJsg5cjoFD7",
  "key4": "37tm3Wz8nAq5sjtLg8dD1YjCPhHEgbfp3ZacYYUaAFR6YpxezfWJBvVNZTmWAzJcH9rjqJdXdpTh8f2s642aErD5",
  "key5": "wryPdBp3qY8TRrPjpZZCFuhXdshWDdpKAfjBH8JCHafzDbFYHh36jymRK2EckNewpDsoWxNf9oXtGGMRtNcNX7F",
  "key6": "4FTLZk9LnbCXkTB4PoQSPuvkynnGNXYSXkffXwHYrywBcwQQuwmd1DrRpwNvRRbMhNUznW1199jMRcsWaJC4R2pu",
  "key7": "46ULsLcvUcjKxYrsB1PyaJCAY6p9PZX8b7F6yybvjueJZEPscNj8A48an87yasbAd18RP13dxDXS5qWhGDmUgMGn",
  "key8": "4E1uoWh8B8RXX3ZSkeqnDoDWqwHMHrrPNN8e2wiZUf4gG9QFLpbAeY3vXQZ6xgKfWrbc8mWDdw4jwYNEv4PVAyVe",
  "key9": "4cGoTSMKrYhg8SaQoFnVh8vmQfX4vR1cKBBcPj1knA1NZMmgBRTH1CdtfeypLdFDwMLVggcyfaPhvKgRqp3hsvmr",
  "key10": "3FMBKHNd5VkkHsS23Su38AY2PVwezuMW777Ctquc7aNMFQWi72DRhzNTaCCZebqF5Xq2tXG7NytxzFXD92zfXnd2",
  "key11": "4gWwgHkLrKEM5qgkF5JigWSihZEKRwkN537EoeFxstmjsWqYTBWRk5LEyV4JLBzbux4ztKSFPxWtmyBPXTkCzpP8",
  "key12": "3fmN6GVW7Qc1wW37KAPiouPKoEkevd7uHPRvA9CeTv3suKtgDWAKEfdm17fjCAD5NGaFm6AU4e2H1PYYJhAAqdUf",
  "key13": "2TRPbz5Xq7VrGdDUFv2CiWiTzb2sSusmNcrmC4z4ceQceJG6ZXLaDfsYDU1eNwDfZuLoGVEb7KCgNbnWuJGE8PDg",
  "key14": "2FrZRtYhftnh2wdoMsZg79WKP6NK3nVsLZsb577qeA1dNHRu8SeViN4urzjMGkyDs56GYfMeKZpF2M6WHtVFrUB8",
  "key15": "2pPshoUQg9kYULeeD82KhAYrHdapNHiSLwqowyaE4ng5gnnhfYZVpRxusXxtQSXAtvnqfxCwj8DfBRmQ1kSW9MJq",
  "key16": "4vnPekDPJsWpFp8WhvtPXcHCcWW1zkT5jJgs4hpC8TY7m3kT6hMoCerFkzHzWgCzN4CANmxDQfCorU28Z1hrPB22",
  "key17": "5rJoeoejDPGssTWW8Mw37SDGPmpYLpxoWpptHywjGacabneSrQRCTyzuDrk9cr4G8HU8YCWvE2n3W2fFudVfZnJ",
  "key18": "5xMyTqRdAZyyRJXoX8XEbhHQHHZ1AZqQSWtpSBSFGdYC17nLWvv79jkUY44i9ygtTjpoLHrKWmEDEkxrVWRXP4a3",
  "key19": "46bjV5Ar73yurEDTpRrU8eVcAXCpHn8ZQwaFmSBNN8geSJxewz2AfRWHPhKLBGK7Jj1HoVd2ai3bjez9QPgsNKu5",
  "key20": "37t6T8BaZXyiW7Q6UdYyhYXn23jZZXZvWhDyev3QXMEFMaq5YU59gy9AjT25DysGC6R36PCAocDB9uFPWh8Yfwfn",
  "key21": "teJdXUGJw4khDsspzj3hf1Y6E5zjWCQCvqdnoAJiA829pYNhxiM4yk5nokDeLsac66mKrjb8Am8SCnrMVommbFK",
  "key22": "3jXypJfz9ZyvJgCJtHHtwh7uh5Xw1d4NRxjXeyNCMNqy6BHhb63pCyymArr1xp8jogikQ5ksF1x86xgEt9zm31F2",
  "key23": "wiGy6kUExuoP5AJvy5ksBKJXBphR2ThS1ToKiDfxYPF7Sf4DJfRvnY5JRRMF4xPQwsBBxGpmnmVrzeEaffY5dYa",
  "key24": "3QKaVf4emUF49UHq8BA9gXYwDNL3jLkrUjfsYXcFem8STkg19MrEv3bXcCBFdfxtv2jmrmWKoYMEMjAKKPTbU7gs",
  "key25": "5Sooog1zf9jJ46MUaTJUM1Dehpoyrny7Pf9JiEQJxrDpDBu1EXTreyY9iVSevbohgjCRzLyyWQbWZhcy9fLfWiCf",
  "key26": "3Q3vEj8bkkm44CTYNrgyRFGsb3VKPmCwjixQacRqRTPjxXZAC85QegCH3NCThEaGMN3E217Uf3cHYt8teLYhPsg9",
  "key27": "45E3kHig8CYvfES2RL6svgsojEwPbJQpzuYkCGbvbQPZhAZRPtaKct4tGygb6a1nad4SikLNKhic7hZyfZZk6Ygu",
  "key28": "5fbGqXUEZZjfydMtf9CTKvGG2cYSjV42mkDVg6gC1GT8LLhheEfvoWx9NHKiiL9sdCoGzrd2KFXk2ezRsbiNDN7b"
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
