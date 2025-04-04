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
    "3bZinvYLHt78m22cuZFKwHRD2N3NTYYYhAgnjaFpvxNdPLs57YeVPMLCGGzmJ3CD9kNmZXrYZw9oJPAFZYZ3mC7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fvgb3fpPfxAX63UJdTQXCWbgEF2kEou16h5TwCzGBGorGsP1WRjymX15GBNiHDH6uZpgVxjHHEDL88tmNZYCSBC",
  "key1": "4DJ9eeAs73ovCGDLWc63HKukcDSWHxFGU5quqANmKYSaBgvCLmmM6H93xSupsbyARghHY1p5u8SeUwZAqjpqdi9u",
  "key2": "58vZW6do9BZyXnFaWH5pLZnJHjCXENPYCQ9vQJLfdgFw5ZFcsjPmK8M1qPjYkydrRbtGzQ8tV9ndayCsBHnB5Lm5",
  "key3": "3wTanhSyXy9mqNrCj1wLy1N9XhZ9HudD2hb7TTCZC4vbJ6enwXTRR7dvLJY6MroMEsyaXYTf2UVcGqAgDmXNddhN",
  "key4": "3urHUScNUm7mm8GnYBRLcKoXTncfULcKRgv6BhZSLWYdAmxruQs3ZW8et3wAqRsAcN2HdCCDhUHYqL7CqGpJ98Qe",
  "key5": "33sqSsgELDruDbVEASCrXAENmJHrrYy72woUQsbavWh183uoYKP3Kc58s2pTe3S8oTtuhyQUCevkPRB3fok3K7P7",
  "key6": "3gYisGu4uY2Lo1cs8fR8NwM7apzeB3iq8cyKz8obYWDBgNKQktz2TPXWNgu4tLsCMfNbKvj4G2aTBxMgL6pMoQ1u",
  "key7": "4sioXVNUUT2cDzucsXW5zAjR41jjpQ4ssBuitGR7HS7aXwcmSya5rSssV4G9EuTxeXaQWnTNbvs1ZKuyos1iK6KB",
  "key8": "grb6cwf59DbVwAA1JwPsSuMfaC1LzTEn453TQkg8mNBoA2k2BC5zBKdB4WWRx8H6bJrGgze8HtHfEWMkBLTVzwf",
  "key9": "AbpZsbyEX2aNi5rNicKuHQj35LQzqLzp3dtdbLG6dCnfYLc4ejzns574tYHQgohnGMKgZeM9FrqHg6bNynBgHWJ",
  "key10": "38aNaDT1TcwsnYbNLEFTHYsyn7d7xxdf9vqCxPuZPFpnaUYsgcBGRix4wGJAM9giRP2U5hUx14wPKjCnz7AU5RFg",
  "key11": "5cBqBthdSsSN2ywCt9bMWKR4bxKGWBAWaoNwvzyKA3TW62U1Wz5f9KaHutYAd7uavACpJqaC1MKnj9Gs1Z9pftQB",
  "key12": "5RomhjBhaLMyaf9gH28jrTen7srqDu9WZ9UvUZma897rXvNMpCtRCm8YRCc9DFNWJxvvJAWdrapKNKkSMSFRyEUJ",
  "key13": "3GVgvrYzEQ1aMHishptajxG9DRSvuLFKrZsVjkaeutazuLZdmZ3Rm6U1Zc5itrQVmajE4xM2W3EYsJXE3n45EjHK",
  "key14": "5wF8uujcJmC2XkVHS66qSeUVijS1A8svXxu5MHAojMYbphQw7kJ67RDxqF59aJpqGitcMSud5M71PLRc7rYtFtMh",
  "key15": "3LZdXXE6kC4RgdezGSV81Bg7BNmfEF2Pf8Z9nQRrRj6YLCd2VDK642YH3F6GtDMpBG1qUoT41XciWzHRuVerZqy6",
  "key16": "3FMf5GT791jKRvCELtMfCJz1QACx4AV7R9qQgkhCxbWwis7ZfUb1i3jHuqza7u4H9TYSeczDAp51yG9yguF8Sjb7",
  "key17": "5TLjQeZ995ZEcBJgkFQ6HFRfRJP9LdXBBTaJdBTkZQ9UccfiD42bBXff22crQuHnSYteeXmNfaSjcsfpJ64vLLWo",
  "key18": "46M53SkE9triLLsuQ5Dh1GpPH8JY6VuXsLNAWk4uXHC1VstdM7yAiZVHbGw6ang2WiZhaLkTmnXNH6zWJhX6czyD",
  "key19": "3orQh9Naeq9eFo4Bu2Jt859yYf3h54qX4A6DuvGHztXzeETfXZjSyrWUom9uq5ZQTvFsF3coeXFLo3e9o5NxU5Jp",
  "key20": "3pdg4yr9DaqbusQsHWFZdfchVJNmqbWjsQKo4tSdqXSHuNdvgWHPjLhVYSmzyF7C93gXN93H9UE4bMCp1ggMWp1o",
  "key21": "64hRxT1obCHuwKXZwicyxFScR4jadzRoc6F8PYUm5R7KfFdt8FkBmHq9cf1enJvQXJqEAqTjX2KQbdQHo7jRimEG",
  "key22": "4MYdJe94AvDpGvXtUgop8VPE1HM8Si4zzNKBYYCszZpnmQXDdfAhWhKBxcayEWE8cy6BaxSKwgRXEDPhQge8LV9i",
  "key23": "4SMJsZGjZWdNGaeRRThKs2uRwpQQfksN7iTxm3mRrwZ3JYvbvtWSfw8NHRL3MNJucgj246R5ADYCNot8yUYxFyvL",
  "key24": "2caPmD2azVW2SebtNBwwGCrgSepg7fTpa3J7WyWxBkWZLcQAvAZunmJ8KRwd1iojagFiLMLQJD9NUU7PTuMamz6H",
  "key25": "opeRYh95Nren8xV353JL1jwxyw5opnttQBS8HNGamhrRKBjjVGQTRTU8b1y7AZd9d47beb77PCrfGt1ygBnY36Y",
  "key26": "5U6nHF9D7zg1DjM8LZ13d7ait583TPa2VDdLtg4Fj5qfJ9pDaBiXfNHwg1dwe645cr1Yx16Qv21C3yQPpr6vZHKP",
  "key27": "3ggHY9kWw3XxMQESB66GLGMHzu97GAmsySwjuExBN79ba25ESEFDwM44oppBWJ4Ksq4mSSd1DSxsuybx1KYCHykJ",
  "key28": "3BkZg3iNotye3FzgLiozQVxTpyRNHDjyD7udxqYLcPGPAjy6qUDWsXtkT2x95PjCbvFBVdpLAyZfefVKY8n3gCnw",
  "key29": "aF6TkQum6AQYgNzr3b48hy5xBLZPwi5k648bPPwEB4t1LBo7CbAZuo5yJG8aCTLpZxEAGrNts2hZCPyswPq3oXm",
  "key30": "3NQHvz13RX1pSerhHtpa2c6q348kiVcUUne6h38XzoRRExe8ypH6LEVN5uCm77RpuiuFVQdcBrJx9AyBxku3H8by",
  "key31": "4b1Tjm5jUMdWBz6bGPjR9qehhjcuaFZN99c68kGZVuYUyobhZUbitHJAFm6gazUx3pMPxbkXfmM5g5w6XKLtejj",
  "key32": "sscpUz23DKPRKGGdoxaXqP3ZKjkWAvBKKQFQrge926YP1mf1xaLmMTafcVZm7cNMHyZKgUj3a37n1VoXSFfoXzP",
  "key33": "41frUV4CuArrVaFVibHJQ8wvULZuFEYPKpDQce5SGGT6mrb24E3vvRZ73kPcZMKrnZhQyeCZUf5KwTZdFd8HdTBr",
  "key34": "H2viGamiZUyfeWvULCawQysxCdoATQ55jf2cCwTW12FvwyeCGvqSpqcXKdrs9ce6ZLd8nzpLFjsUZunKH2DYH2w",
  "key35": "5ymo61wwJKCRKJbGFeZPofubfy2zMgZemJDFyvRXg1AQsqF3uQZSt9ump49YSY4wxvDe53f61A9JiFpPAZDyu2EQ",
  "key36": "2yn6ZKGe5JY6w9idxDDMsMJsqG71aYEWNebt1DsXXAo1XfV2ztoJq5BQWTs8eZtcp2wGzyuZ84sec6VDTNmkhpET"
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
