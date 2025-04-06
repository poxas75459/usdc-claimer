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
    "5yVqYPHpJGMccwBvg3TgQ1BFx4o13q13qg96DZKRp6Uf54CW4vjiXkGE5iW5PSBE1LxtQhL9qbn7LK9LUgq1KGkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FN6FT2X5pgVBrXekJbUjqRtte6TdYfHTm6eJdV3YhRcMa61VdARdTmBia1AAiZ8V9K6Bcw1EvS2GHUtrc6n2J3R",
  "key1": "4fN8Fv27Pdh61VySZfi2e5YekXJj3EEYMRX9ZckMqzbJqVVXtPiXTNVFHEwMJUkxQPYQW6Xc82d3VNjRiytFvoUv",
  "key2": "21e34AtsmDSJK3Zxhdbc5tS6vPMngx3ia2PfSieG12PZshpTbaq4QdeTttSq5hj9GrWkn93sJaZPjZBbaZBmMi9j",
  "key3": "3yjmfQLj5yNtXJXmZ9CKqR8hPaziZHQbzYMxAoGGsQUQhDVq183aRJc2jsb8AfWFr5sg2rhKHUHZuGxwuKMhfw72",
  "key4": "3xwpgoZgQkaQXyay9AmiVW11y6iiZ5L3NpedMmn3jyj6b2Hf1T29CbcnpQnrYJdAMWo2T1BpRGtTkjGwQmHWe4KP",
  "key5": "5N7inJW3zzQUKAuaNBMyvwWRzNiCrvDaq5CxjWXHPX2Supd7dzCsc3S3xWizhNhheGBa3a2AoYF78JZqrgvrvMTo",
  "key6": "qPnzo3Pf8LDuMoKtvVuggMeXj2dojgKLrv5vcY74bZg9uagiGVD8Gz8MW4nsw3eKzZpFdFsRMDNnv4dZKqdKtR6",
  "key7": "5PCrDYttutFUoiF3Ttzi2YZGPrjyzhyg7yuhMoqseBXuozz5zZwvjZNhQpbKStEna8Wu8q68X6AMCUUBGzPprWGS",
  "key8": "53SXdkrEgPvMgwq4bAot2XVA4HcWtyYYMdPixgaz3dJPVbN9m7M3yu8qDAM6fjdpoUwjHMgDJtc78zafrZoHJ1S4",
  "key9": "64iazvaTBfvobFDEVJz6pHn2PR9AcAiEaq51kpFxEHeKTgQ4r8i4N8wBd8JsQvZddQwH5XMGioJwLHJUgGnnVjgM",
  "key10": "4d8qwoxM3QV7RAseu1pyefE7J51btq392nR6Vu4wgbM1T5JyExbb94ttRwz8UynVVgPG446iq11v1PkhXWDBWcxL",
  "key11": "33wgAfJWPcdt1oJ4KrJ1orSZg7kvpyUf42xh4gRX3Tzui3DFuSDThJMsr2dfJzYkUZMAbcFF1mz62uWyRH1YVVMX",
  "key12": "5uwkBYwSkuSzewscoe7pkDj6o7Tr8Q2E3ZWy26me3QHTVYqzxEAFrekPrgTXuetqJpnaa7iha16jDKbcxhih6J67",
  "key13": "29KwHD4S1oqPkjCPdryjKzFHvNmdPxMvSiPFUbDUkp2W3qcJ4tamYyh3E3Fxpgy1LC2CTZ7gDeVzx35tLVd6rtib",
  "key14": "2mTtB9ctHA7tJTLKN6fwKkzvSDvRynRMwpWPRSw3XPJ9KKsCfX5swhnGMzHdgzr2ErieEhBHi3Zdk9SmFnqMNfQj",
  "key15": "2GG6wkPx4KN9scmZ5EYYmFxJJjwzN8JXb6gsQ69C3bsyzsk3nErra2Pn6hzjZRmEzqFwYZRjdz3Uv9pjwazkJpDu",
  "key16": "2YG2Q1dTko5A3RzVPdb13WHgPp4Qwjjfr4TMTEWt59jej8P422WEzMDZi1t8q4SuMQugmFzZeF4rC1cEQnXBxVjS",
  "key17": "fdGd5sQMohJ7vcPKwsyoiyBS7LB1FxzUCcYsmhiirdcKnEZCjQhyhMuypRDUhsFZCZg24NsS47zd8NjvyTe1j2M",
  "key18": "3oVoXBfzByfy5AR5i3Hrtkn4MgQGcv5zU4QAo6AiGVuZ5UNNwEz9yU3K3z6yo4qnCxweZJ9v5SzvSo8N6Yj7cRpk",
  "key19": "3bC9j5rAXduduiDMTsugCsHk7s4aNGc1yWxArFiKU89H3pg97vdx6QcXcbpKwr3Nt3bfGKa5ekT3PuWL7yvxV3qV",
  "key20": "5XkbVMyhtKbjMzK1P2GoigUiREwGxPJJXnyUzX7gkDjczycktj8ocAw6jRpu8Z2yYxkW9zjRpwGs3LjPz1L22ETM",
  "key21": "3rv7CuMc67fmjp63iWLVee9Pa6ekLcPBb7ih2cfByBR1gXNfUq3a8xp6Mr51s73aEcwc8uEAy5QiH2gdJaDjoRQj",
  "key22": "542ZGQHVDtY1nVEodvSPRn7LdUzrEbmcWyY8qeyumoPpyuSu95HSMcHabfXzjjXBbN6sXUskDAD3aKXdAAszXWx8",
  "key23": "5BgZkrWWFWH3VeYib277GvdmhLb3GbBGZio6n1hm9BQuXbA6HXJq9ah3KvXrHsqhUzFpN8DniRH4WtcFDKPNZzhJ",
  "key24": "5qd22PrfMWZupLtdj1pFiKrP3waRqPCehcbDBBiWn49V1AqcWSAwKgf4DzEonkLUh7i1isXThxZSwd9TZSPLzJnR",
  "key25": "2VcoqGzw9jNHVhW1qCuDnw9Q6fNBoabmmQ1xeZ2WScDpwopEt2gyCVjAXK6ss5uwJDa78ConYiGCvk5bqbpKmFvj",
  "key26": "2MJihfDN7RnTSEJmV9tEa1M54opc2njAdZUUeEGfCWr3WbfPrhSdsR5HKifz3NHqrbE4YcaQzNTLCSnhXcmhbqgb",
  "key27": "2AiKhBYrWUK1xN1489NhBvWWVdzAJXRQwGkwqCjPiM9J6LhEX3VC7NPWLwasGWoLsZFTFBbySzQeFGLhfF4EsipF",
  "key28": "3WmirEnjursmZfupdpayon6huqjgG88gKnSFCG6RdiZuvxiFKZpgketAN2rzFH56kf61sej3VXgtsdsstHVDJFz7",
  "key29": "58nkE263wZrYm1yN6Qn7BTgfyas7zV8zqoxvKcKhHqdMaye66BoLdHwpPHQcczR92LEdCMemLdg1UaNeVkwsfnDk",
  "key30": "296qWbs5KXhQuGAqn7MaA1qssEdSCZaVezyBLNMDuumRKXzP5kEAuq8ZiT9CgsTEFrQXwCscU94j6TKuzUA25ezs",
  "key31": "TBZp2JdXRHUG2rz2zza8XhHtMPQuMnpLP9Rah4ZfTmZHLFEYXoAGWwkziM2BkGNokQjvmWaPcgY4UK7Adkv3Ycc",
  "key32": "3CaoUN6ATtzfimsR7oPj2YBxgDeVtpQf22MVGe4mdpsvGUzdjQi2PE3Zfjjauiv3e7GEG5iZxEmNfya1R1VGV4ZM",
  "key33": "5CDvcDAduPYGtSG8f8Kq6D2BheepwKTCQNaD1C5Z3s56sLimyR4LKZBrdmm5b9DRp4433pvPVST4u5ueevmWpGha",
  "key34": "4RzH9VbPCTbvhk1FPi2TXPpfKbVL74kf2ZVPzrfaRt317hu3PxPXE5TnxSoz9cg7AVkUPRvJscrwGkY6uKE9jWBH",
  "key35": "31YbXVPYzhHaQZPZCCNToA2n5SjWM8akyd91xxwxjmCcTZNfaegbzv1YxqdQhZR5NBZ8dSfbUQ3N6o3TskswZtwY",
  "key36": "4uYfFZeGyKSG4bGr5UaWHtgGUxdH1d6qwnU6mX5Jafe8T8jMTQ3nAHXCzXW7Gh8aTS6WDDdcRMDk7ad7EGVFDkHd",
  "key37": "5ougURYu6swHJCLREXApV1YNC1Djagy4gU9PxaWmJY7RUaWLG1LQe8JEq6izf8htJR2veoVMiB3T9amHPwviaMYz",
  "key38": "4nuvBXUoMSmomjpGmx5kLKn6Aia6MQpeqre7iJ2bzRJycW6yLzrPmJwLicHE2sHhmYz8gZncGW4tAvfx3PvT4Pyw",
  "key39": "533vA1HXDoZHZc8vUxBLSY1N427EGPKSWrvCFjQYZPxiMUZMqYXKSKjSohmt6yWcxHejudxGhGJdt7Lkntc92mNG",
  "key40": "5zR8YN6xmmoNXHGpWsKAPcDUPLmA6o75WnH3y1WHedto8vs1xGAsM2bwmhkqnzHhRvYZVmZfd1NHjZVVYnMu6F1E",
  "key41": "3S3Q5yHNbfnoj7qhnsUtTzMiBLipQPmQBTsGzP6wkqzTwDMHXWvsCsindeSszUYQ6Z4Med5EyCt4G9DKy5a4S3Ea",
  "key42": "4YJRkrK71F3R6h8niLe9mHzNvYS6UfeJ6J4Eqrzvti74fJbtJueg1hHAyLcX2eZfsusenvosPYHHzrdmusoSmmZ7",
  "key43": "5rEENLcqnU1i4EzvQfE7KBDnu6T2Eq7gfJvFZpLm57HZS9WhSirro4zTJ6cLKgsUVmDC7bMZfGMK5ifvaB9BafPA",
  "key44": "5BhhpZ8h9nusDYf6Gsp1c5jYBbY39drFoQA2awEsSJTUQQEM7nBLsCn6vfymu4JmEUWSSMeXhRogg6RaCYXn8os1",
  "key45": "5NzhdBJf6ctLaxxqERrfww1B6U5ThwAu7boNiA2tLAR2Js3iPqwuv2S7iRaCgYgWLrgPp2nTtsVNNE7w2UcBtDTQ",
  "key46": "4ua5u9AQ523UTQThzpaGLj7kj69BWWb93fmfRvfGjjWxg61k1gM8WezZ1LsiFapxQPg5y2uH2PpC73BsNoF6VTuf",
  "key47": "3rBfRs1FWVTuCSEZ29MMdK9vfSRs26Yjmths8ruPrfhvm4vexNxqs6fkEsxLBPVFzS8HT5P4PcaBqXfKaDYY1WNy"
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
