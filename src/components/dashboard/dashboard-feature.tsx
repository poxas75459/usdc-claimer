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
    "4sfEVRs9ae7ZvzhZreCUqTyShZTKRMJQMaJWwDgwLe3tAWdE6UKWjFxqXHsJjZQP8eCjVew42ryqiCDbWrcHnr1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52amka77m1iJuDouP8ByMUcK1Tg4EkqjHTt24ridKhLRnHPML1aDzxH5DRZ9k63Mewq6MsSyekjqNynQnGoah6N2",
  "key1": "5vkSPDZFY14k9afPc4cav2cK4mqSgG88bTsbtrMziPcvoncsRsTixTAtjcajt4aKW8pQbWSxwneXdPRJ9nYsNG8U",
  "key2": "4qhos7aFzjWiJY2Fk47TuEJzWDAs1BB2MT2eqnEWbabUQYRj7dLuvvpiiFTFgfstAMYovE2bU4GhL6HSeqs5TWJE",
  "key3": "qTxe75fjUsBHqUZANTVikMseHDFFsugB61pXP8JWgxYmtFrLM3cNeHNeWeV7hQNF8dNnkYuV62hPLAhuYDeWZeM",
  "key4": "3vU41zxRGSTATJyeMSU1MC1k84fgfctMFZXnK9xFViS9TjCgzFNgfQBmsVHKpkZncrB4j8nf67JZ3ZowhFQt41kL",
  "key5": "2my8r7P85bXMV8zvrbcqhFd78xo7BZomubHfCGVZKfRCnWnCzycSH3KbKnTmKbdQ5Lfe2fXmgEUYYr5u5a5GqU2N",
  "key6": "6WYnGFJZbwGhZHtx5He8fwGz1m5474bwYAsRVSi4q2PxuEUF6p4PwmnChe7pEKu7DpTvhDg9H6mkz7X4tqu3teZ",
  "key7": "4HNjRRUh61zTuWeU8aWLLwEwdVtjUVW7jbWSJUUh47m6Qcf6a78NnUj8jfqQjY1FTqYTzAXJmudcmGH6Xi2tECqi",
  "key8": "4PwmbC6Sc58pFGwjFte5y9bUN6hY5sDLjo7NjsTmnqNvhjevZXUgMXKVEotreutjadXoHsfAniUTaRkiR9i1oCAf",
  "key9": "5qWmBC7Qi64oLWCumH8UPM7aK6SrBBa6WvW9N8TCdjpEVLRAs7eMX1zouvvSLiTHz322FEMJg7yzNtW4hQZwrfo4",
  "key10": "2isYZpA6jgDhJpo4TvNqbocmiuM7Agj2Hy36RpywW1mTi18CQcDS4d4RrxaDiqKwg3rF5rx2AchNF6mNQnXGLrAz",
  "key11": "4tCFn8Pw7FfnNrsd2FaSV5efJrbCx4EY42p9LLM2ozsXuh6tSrmYyY3Td8uAKcSjZYsBFs2DCefEgyJ1n1atDTbC",
  "key12": "21HXq3iCyHgKX4XidyvBvSd6aw4bRmnNfBABBLXGNkFV34zxHz4pbdC5zg16PR6oHf9vA9Pd3KRgAF2A6PX6ou8f",
  "key13": "4RL9rUNGEQUCsbcHcfBUJt99WuJKCjyhEZTbFkxSGSZkHJCjb9Y5RJHuXhhM4SudmTEJH76ZgiPkEqaiyxc4K5jY",
  "key14": "5TrSYwz65GYLfunLeaeHYwidRnGJ3HiF5u1ELqWJxfvH3Y4QLQmscGY96dEkdrj8gu4uTUGMCJ9R3mrqqxFnsbMm",
  "key15": "3AybzodYvSFq7xb9ibnaWoMqQ4LS3VNDruk4Vayya9Sxiwk3ifsyPKQ8HZDDU75myHqR43KzMBkA7efHva3EUiox",
  "key16": "3STpio1jvryBVRixYL7PCUpYQ1ccP9J53XHgMCag1HEGSwnaZZivCgVmdVVW4hgdLTj2JTWjttT9CLhoPnQcwTdx",
  "key17": "5FEG8Zg97fh53mKwMeSnhwyoAEYvx6rXe1rMruDakSphd7H7ezvbu6KTPdPYtiUTGe1sPAudsKeq37USmwYMvG5P",
  "key18": "4X2VGz2MVrxoJ2CpLb7LFd9daLkt8BbFjpwNKi1acFzCit21zznyAEpLXpBDh7i5cgQx1V3MLzGciXpxBLvjM9BD",
  "key19": "3RTTgwtRDmerytiLfpFREogm1VkT28KCR8i3E6UGrobzR1pzteTUqYJab72RV1fmTTxpfRmcHY9MRxHHMLEagbRz",
  "key20": "2NyD52DzMaPvRr9CWjaQTFqGtX3aepC89PpvzJu3jtidjUo82J8CXDohDCdaD6Pw7T6HRttRxiKYZ8GGd4xH2M5Y",
  "key21": "3BwURXiQ4FPn5DkPuegLEEZ1sqRHenjKwy8APfdmoW3tGjpPbGo8e4Y7WYAktPkqcQJGNJXMT7rzUXTm51UDrYrP",
  "key22": "4BgmoCN5q2WpwoqAFMFjhTDdahurjiV4MKzqB7E6EuLCfdsoFQoiib3EcTsmEW4DWApkADZtyytcxsEDW2A1tRde",
  "key23": "6GN4nyygeBdF4opo6ifUYh7myFmSVHhEjNEngEaM17yMb6hD1V6pbiL4HEz5XACywsHr3fCSQ6gFFJyzGgmBiKp",
  "key24": "Kdkk1dgmH2M2ktzR7BaGCPNRF3mpseQisiiYVZ4TtVpbGNdmZXVaxG2nD3Zsq9NSBrAfRryXsEYtq2tjRW6VeRU",
  "key25": "5WbNZZz9Qo1bMi9Pt6RTZzd6fGoe9Vxb1hMArkbdBuEqd7vNh4D6dhWsjf5XBDyJsdQTCJemVoK2U4WFnTqQKQZf",
  "key26": "3LB7LsMxnZczGmYBxyy6sCrBXdSfc2KNvJuKaAxeF65vxLYcVkjM7PfgHN3kLuxn3hhJr8Cnta4gNeYUDmW4sT4j",
  "key27": "SdukDnCSDfyiJSEjWwJtomWxUUydfU9QKTPofbhYom87EDSzGkPo5Jug3pP1XFHt4uHcZUELdjAJAkpqSob7PN8"
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
