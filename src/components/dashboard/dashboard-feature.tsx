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
    "j6QKCgq1ohcnDq8485KgbGgZWfGy41QXUxo4fwVzQ93PCeK2AAmQDn9tHiCW7aRsQ4UL4RWvQ3sBMZE14rseW5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHgdwA38jTugye9VmxH118a4gPYZKZhAUNGVtgcT13GysaBqFoCzqgoA6z1gNMF1uVMXS2zZLcUTCdPEaG78X7T",
  "key1": "4HTnpYaYbSYNUFy6i4JHN3yCzMSarHE5JZUjkB48AinTBWuqoXQq8hkCSnWzrKHXU64JxTpJVr1x75rG6NPEKntX",
  "key2": "2ZVz1N2mDtEwxiTCqexsdGsFo9Voi8obLgLBsXH1dWwYBeudxKYKuUyaXP9q6veaTpKFYTvkoJqmpiMdyL3ma63N",
  "key3": "2A9HcWe1UbcZymSYiBtccur5eXZxzdXgdsghenjMA6y1tDHru3Ui7hcAYZueAQydGWAox32czVGv2LysnNBvgqQi",
  "key4": "Hpv3GAACTpd9bNGyt7yaAdsWbjmKah5TQHnUFSRcSvhncap7vtvWQyrvA94e41sCpnpRYHmSC1P9zTiShhFDfSu",
  "key5": "5uyT3yKEngUiZx44LYf5at9dPJqbeQKYS8AsvTtJRhQ491X27vbUG2z3ewvJ29EddfLxgaANqhmQvjjswCLjADSv",
  "key6": "4mN7KG4gBVsejsfFuoi6UvifMMdsJEgRuG5YMXkRC7YvW1bixm2HmzP3LKeAUoua4qvNYYSmwkCFMGK6XSMrTyjw",
  "key7": "5yJdLoQQ5AuXCwX1qDoRo9BE6zhQE2Rz2aCYSqCcT7b6b6a4riyggvyBaWSKmsMu4dC1h2mNbeJTNNiQzfhW2L9r",
  "key8": "3cJzwKwzjX9LsLQcPFtjazbsneADsDHdoVDTLenCVya6fqtgyUYqruwsjPrGq95e5N9W2zvutdpSpRZzrLK4scQp",
  "key9": "4tkpteHP9WQe2aL1QoiKMniVnUpLdLu7FWqugqJNgXuP89Ey4fgGtxEr6sqUiPj8aKvhfBzDzQsnhrHsyVo4sXda",
  "key10": "eLh3W7HgXJgqwHntRwhfC6LiCoALdYedQCrXcFucTPJ3PPoCQwGS6x22SYV5zjffWyeWghY1pTdmEKboy3tE5wR",
  "key11": "41KHiKGEivpzaen3qXg45sKio8UPG1PkURcN6X1sHX5gQnCcVsknCQdJZVgYgzDytR14AcoRGP8b3BUzjKMpfYRS",
  "key12": "4PQ2dGe5nR49DzSM6YqRHAywjVzeiM6QV72ptYbHcjKAd7XpvkzskGPC3jzt2gXr5rnJi643sf7knZ8qtirrmgK7",
  "key13": "2Ki11GUJ74wRmkwSuNdRhTsq3CLVqMC8C2gUP9uCt3F1JyLA3vdLCgoxoAyPnBu2oJ5e3vgB5Xx9SgAF6zzLW9Xs",
  "key14": "3hjsxEcFP1iPcGVgFv6Q4LBsHSpmf8v2ieQppJVy75xDzsRdiUzVQeYtoSr5yVmXL8qotBhjT63Ai2JUsL6eD2Uz",
  "key15": "5RwnH1c7cmwE38Gu2ZyRAb4JptDThC986HBHbmyySCcJxkDTEjh83R4tvqhPRAN53LaJPw9YztYNbnMbvBjtFJk3",
  "key16": "5vyS52uBbC62ELWVVo8hNGxDzhxStkVLV2rTsUWfU9NwwWboW1BRB68jv1rzst8DQJ3GnhrYB7v1i2DfK3nGhmnn",
  "key17": "5yWuMvRiA4j1EMZdusg9J4TGB2HAhFdabUfbCupNMe6GpR7WHBH3Un2Uy4XxiXiCkjame8S47Q7b5PSGizxKhCqF",
  "key18": "PbauoeZfuXXnqknitnfT5oxWx3mAmV7JoWCDj1TwznhhDxsGAfFNZsvSaYuySDUKvYZoqSUKWwjyUdb9Y3axgbj",
  "key19": "565Wwk3WedCMCXvC4ddbPqQW2YzRRBB6KHVzZ1QXvX16ZDWEbDNyBZ9pVshpUXsa2P1f6Ru5uJdxQPUY6Xwhan96",
  "key20": "3YnsVinaMFjHNiXCoF2b67YC5Hh2XAVH9ZQs46huPfJjx693dxqjH9iYGMRWsCbmJmSPzafeQFXsje8edqCXeCHe",
  "key21": "52jeb4z7M84RYrWejMUuDy7NdZaUpNVRhRr4NursqES8FMkRcyGXbq3g9wybeQwE6r6HHDLrthayECyj3tSU7ZdK",
  "key22": "2k77mHrGQCrPA3ZwNzWZJF2oFHcUw8imnHKJqjC7CbxhwV8MUmBgymywqnmBmyBVzoQU5iXM4CHKa48nrs1sCuaR",
  "key23": "Nm55fTBY6SuGSXbrA5EgHcZonmt9AYQ2VNUaVwzqbasjVBkq2BB5TJ3KbozENFEb1SspWbHLbXiJADFSutvVnBu",
  "key24": "3vKmesHrfhBHfJJoLrWDUXuyGXdr9WWep2H48ahg3xzvf4XbUxcE9ws2p4pw3mWFto26VQ933b7xVbibQzCEvPx5",
  "key25": "5hYnXp5fFWceTteinWa7t12PouaqLSK97v6yUNsxgKrhnhYDTZf99wJocbW2GDwAP6b4QV7AgfmHFZTTRHh8D69S",
  "key26": "628o1p3VVh55hsK7Z49RqE98S758puLXyk7bubKAASMSJJYL8gWbRLto8evGVWcRNyCaqy7sqWARyEqwNpXcU5b3",
  "key27": "2JQn3T2YkDGn7Ejkv8FhuPiatKyuKzEmfp4bqqKgMgpa6cRvAWNMtPkW2KYR1vFcSawiBeUQzj6ZLnXkPN1esbuL",
  "key28": "4APxr2PwMtfHqudLzowF5bYRRwtUTPD79eXcNbJkQeNWtg42MbxNyNvdausA2NScGyLtnNKdezKkpvnvYdhVmubd",
  "key29": "5iE93QWyNs6v66YdbAYAoD1zTrZV7yeaGWo7QBeWgMGbpwU6hL6HfEJBM8zkh3fckNmdRJdKdvMwUuJu35NtV5WS",
  "key30": "288E61EPq7YCUM7mmEESJ65FDhnYQSXiRAY9brQdje9FRdxx5pww4EHGAqFuH3pMStn2vMrCrYV8Gqk5UwmZAZtV",
  "key31": "28x1st3bb7D1fkqidD9aKkYYt1VfbdRCafinoseRWa9FVhhRf7eQhGRSWwCtfmvF9UadWKk4b6YqkpKeET2opsob",
  "key32": "3VDXLGAQ8Sofu8X7Kw2rGJameeLeXP1Wx5r7moKGJ72iU7kmcsEEZZZdj7nFQF2hYZ74mpnaErUwKvBtkLXwJvMS",
  "key33": "4rHwaFHfowqmhP9jL4Rj8wrJUZHvLHegoadSayCdiJ8cEA3WfVXque4CDsuhpif1kWBk3AS1o91qgxUZ8kX6ppoh",
  "key34": "ZwwaAP7ZtbLuX8D4rxNhXtuEgSktxmSKGwQTc7o7CngKs88pPXjx4gw22vW6pWMmw8ATP12dvBPoLPgzwcgSdV2",
  "key35": "5m5Hhvae5UHDoyeHX4Xi4zEDGEAXq6RLVs91Gq12gvo6U37mKP6u4MSP1vP29w3zd3qgfxJinwRcTUGKAbnkkAt3",
  "key36": "3No8nPKL67U7tnhHuRh3S9HCMXThwyF4dF2ygJ8HRuwDqekGnPaSfFEpvybWVHYrKmd3Kf8v2682hMq1W3Xv88fp",
  "key37": "2cUmAP6uw2dJbZm9jSXwWSqt4ERXhrzGiLZDiRACVocxWLaUJkNCRRAcQvviSN5HiyVcpKqayTre5gcZrLmckGUY",
  "key38": "3w6pHGnaH7gmRPorJbDzNTzp5ky4xtkNoVaB7Kku4ZCf7FHTJNGfmPBAr8JqaGoijr1dN6rNNNqzdpcxaLxvjeHP",
  "key39": "4nrovdCwNU4k3XFATnhPGGKT43NKoB8Gwo5simSMrXtzCU9Yrt7dYT6cHi97WoJ7yDxkyDJeTNaZ9YYQnL2V4PG8",
  "key40": "kAoXBHzW4PcS3MQrg4dC4ZZCovT2HqeiYG9zoZpVt4rRLcFQXy4YKUg2K1kYjpsghVPoNfEb9HUkdSdbnSJfAFU",
  "key41": "5BKgK9Eip5a2aE3KR2zvBG9KNPNupEEz1xfe4ts5UHWWFzGjgRJYeGk9KCe4wBecdVH6ifzPERZcc4V2mAe9xbg1",
  "key42": "38e2Hhd7BUYpNLgrBEiyuYPAEdELghxWobVG6T3w7uUvmGcEzuWuW7xh8iV6SLgHXcQ2MXsC1mQrFTtBjb2oUdcw",
  "key43": "63aDY2uiiLSrp9Gk3tLJeJrQRHXoYQgRqFkEaQFSiANkKLphU8BKCYebE9dWuxA8GHic3vdhYYS6cTJcsV1xwhTx"
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
