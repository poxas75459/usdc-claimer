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
    "3rGubtd6VvfhvZLJaTpbfMwUdpwJnZH1q9AeivujDcuWSZyYBQxdJRWothXU6XRUBTJc8L64VFjavmW1wR9t7vQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27gCyPkAe4FSKC2vz3oGSKYgtyn5zAQauMFCdTyxrgc3R3J7KUX1Jbf3yGuKs4wzdNr49R7pu4bFb7Xex8btu6on",
  "key1": "3oxjZTbezEViiQmtgVhBRiQoYVfVy3CmxwF3rMX4MvsP76ypWxjdmFKyRJ6zKUU5QaY7ZuwB6sifMnresSDKT8vo",
  "key2": "3JA22oGH8AVw8MnmdySkC6Kretiz6rCotvycZVCiEmVhFP2PRga5bwkrRYwNRGjijwmTS6H1mUemTNGgNfRRCBs5",
  "key3": "31Re4vXuaPPJp59Cb2ZjkCtUkrJnFPU16sm77aGjGDJGCvSbZn2THQBWwjuo1eYdHMF8ZXYcGTXawKosxUis1ZbY",
  "key4": "2ogvcATEoAKPHxw5z4SyaayxgFNonrzU3dckVYLtEeDopANG2ZReeVFtBM6WKySzABpXRxQ5mEKhEiKJWYAdiBeW",
  "key5": "4u7uYjLPQYgHwpTG4pA5G4s3UML7tVTZDFakRhtbr44evShdL65imHqixxiU97L65k4ABaHYFPkZjZfje32uecJN",
  "key6": "w892q8BvbhN1LxcQ5imPg9PcpfZBEppR3YaZKdxn5kgiQfCu79LU7Edi8insrTVJAVjy53vwZUTt54NVTyHVtwi",
  "key7": "5Stz1Mvf4yVqRF4yNNecQTGkfSE31jURwo3pER1javpJ4sMqb5BnroTAURRE6qgAv98X5ybG2kcHBmzkiVPVuLVm",
  "key8": "5jNgNf8MEGfVMsfaRiMowYjQruQeJtoq2JEMDmWnSMrrUUZUwgwciCt26KuoMFN7Xtn5TbqDpu5Bko4uoCC9K6xc",
  "key9": "4XgVp32qHBTuzYihW7KYAN1Ezbv3Ke3pfX4Eu6oSDEXQnHnCQunEZxXm56FvRG9ULfnSyXgbjfgMaauPgm8scPHo",
  "key10": "4eZmfFJesnS7yZHbxY9NYYLT2wwcSwEhw3fcuneAV1a23emNVVCyyBeBu14ayKkf2sbojXEF3KV2hTYzpY4ZBm9S",
  "key11": "52c7iuruzLY9uWMeQPsTYXX6dXL2wjxMBvQ2pZY6hCH1f8GjsXNUg1QNubb9W5BHFo6Afpv1ZuuM64uDfZYhUiTK",
  "key12": "4rtnfUYVFmnMPvKSSGkMyqumugEt6rAKYJmzBbTpgcBJ5u6utVuNxgsDK7rVnR58WE4chyouRhtRq2AdYeTYNheL",
  "key13": "4H3zkPumXXWQgn6kVkdMSZAnBxY4p11s3advtysTo8fD1W4T8F7AqKpCC55eM8X8K9x5ciEdoq1wAo9iCsgZoHAT",
  "key14": "4t1wTBVfoc34EF6MBUby2LtvgsxLpHNEa2gkBvkXZVL4cqxePkv7uTwJJdjvppGQ9jZm73iT6YVgN3j6RNEyREWx",
  "key15": "5cDJ31Hgbizc8ZapGAtPbi5qYg6cTP2XP6kW8q3k9Hfofu9WTAgGfgSNHyVLbYDT7q93bEsdBsBxeFB9HhHMySkT",
  "key16": "2sestrV86pyuAvafSuuFtuZgKa8t9yFQjzrz33XEZhj1c8rBzMiy8wbb1SnHiGspMEoPiwSm62vF1kx7qMtdHTAE",
  "key17": "2JRbKt7T2yYLGwEtywbR99TYKYpXpG9L6BLuYSeShY9b9CgZdTjwjRLK2Z8edq4mo66tfaUughu4qXcqLGxPaDRc",
  "key18": "5rxec3iyMRAP1TasAiXodCvuQUf3xxxyTTGhdfQf3KvX7tSs3LMZibzqDj7vFtZVCE1gcCaYNRoXqf8rbXi7MBP",
  "key19": "4Q191q3NDAwwd6R2ktQYGfirYRbWqqU18MdhizNSPE9druLoQbTJ2PRGj62UcuzJBY4ypAeg1gDXHwWcRuAsueEa",
  "key20": "2U3Tt3XeZMvKi7R28gsotFrLtG5bcFVcD64MMaPSioL1tW51EYHD73vRoQ6W8xMdNcLcHYyPkw3frQtBUp8JrWnr",
  "key21": "2Chni5ypHX42Mbub9XxsdVQuFKwA4Tr7QQBYncMBEAXuoo3XWHxTzyjRbP1c7guV3RWv5ifBHC2aAwXLfmTURogj",
  "key22": "5qRXapuHQJNHHxLkrVCjj8VMf4f1nERWdnRjHUvFVqumjYM8vm38q9MthkvDKNwz2U5MK9LFC4cBC29F2tTSAa3E",
  "key23": "2z5319tE9mpGj4XQ1JFRphwoUw7PQhu14nAUBSCrn7NLezLYQ16VsRWvAuxA8UYsWMeeHqP1wsGtdPxUiDiQyKQi",
  "key24": "F27CJXQ2pKL3FJWwDzeZUpyyqMABibF45Le5e6jpe8JN6zZCT88ndrhK3RPWCoMhbCuGrQ6wEkUTAacsFBCyewg",
  "key25": "3ArNgMU5XEDJWwmNNLjkHmxZ4YwyPGQgHFUDVPB5TmYfJBYuwKxvqW5T6T3KGnuKvgvZtL1XnoaeZmPkwbfQGaby",
  "key26": "2eKW4RP6nF7kn5d4FZyeESRpQKZuNYkf9JNgLS8if8JKojZSQXfNEKCYY1gqGUTk6DoY72tQT3ESLy9TpBRwGQFR",
  "key27": "2bUkQGAUpGvZfFo9yzz64nDQrWpSuoNseyoekJZgU5Q7X5jdKpjH65bCstaZ99jdASax6U6gcd1t82bE3Foih4MB",
  "key28": "26cPTubbBi8idxtgqJj2BCkGLJtP6fzQg6hfdVK7H4maVC66ngmUcGawyKytfKWPKyJpqiEFXNQEZbXM195mK3nG",
  "key29": "2cuPxLwyZP7oQcx1MXs4fdHd9VPgeHvFvZR2wMHhFohqZcBAsmtcfsGgpes4rEVwiL7JtXVcuVsvtz3i8CV1o1Uy"
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
