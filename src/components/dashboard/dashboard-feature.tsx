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
    "63KxizNLfPjfFLnEYiu3hoJzfzK5A6283LLkZU5KnEc5QqKNyCyyvsSj7a9WnKdHy97YMYvu4jXkN8W9znktuuHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkX82nWRiTjCGgGqKta9ohrNLzRzYJD6sxZSqDgdBCQxaVz3miZ9VZqGCsd7zHS86sBr35ZgjmcBdrZiEz6k4ah",
  "key1": "5WwRgZjyyKmredq6XE89qebRpBRtQUApRYaJ8ry25wyW4w5i6T7phGtNkyrAn4VFJVptnhWSAtB6qPxZbWudmY23",
  "key2": "4yvvoFKLzzeUig4uLbFApuiDrvaTHrDL3DejURpv7Vp52Puwhuy23SbVNGLNbPisYGuM2HAYSjwoYhRDmWLJkqML",
  "key3": "2rjJwC49vn5CWGXriau3PbezTFn9P2rGhj5VSqKTmutAUipUhJ8NEAeLNJ9dvZhtW5KAuRmNkhtJnXx7RkxWSrrw",
  "key4": "2SG9hXDn8p8ZiTpgnQP8nCFimMESctygo5dJRX67Hpk7Wrej1oxYQCzvGUMig5s5tZrjo4Dyum3rDynoATVLWbny",
  "key5": "31V1NY6FuTmKp827ssJ7rpiHundDvDGf1AY3MxbpTYxmsDMJWmvrFLRCUqtnFLrCpwQ2g2mxjWm5T2xEAR2Nvojm",
  "key6": "ycXAaZ6nsAhAr9vt1X1TUwnSmirM2fHr4T8NHsjD5CUdRvrDkqYvtrhQGHG3iTEtWtFktM2LfgtGJmyVoRCKpdJ",
  "key7": "2y6oUzQx93gyR6pwDEAoziMqad3JxwR66wgJZTBkSQ8FaXHofFtiswA2hCGoNeNkMkmrFfakaHVEFeCJDAmxa7S9",
  "key8": "3p5DQ1CGiHZA3PW5fzXTmosk3yb8cVY2LN83CPrr1PHwuobgXrtm9eFKfrinG7iMhgxu9jwVhxTNfsEf7Fp2RF2n",
  "key9": "2NDxNwyB7pKk73PCJYZykqs6udUBQU1CjtcMiNtBoNKVBMiy3ShksoxUcjbZD9f4i2SBg4Z8iyhnpFehvdzRamVh",
  "key10": "49bXLrSgpuw9aCRBxRW9qe6UiE3rdp8wLjPXDmhCgZHoEc5mc7eHfW294oC6MDKMVo7KJZbaVHVbMHDo86SBbV5N",
  "key11": "chXRMFVrb6fyYSs68ndvs2AmJALCGLpk7Wx4bLJi2RYVTaXAPBv6kuJ2ywUt134PUzBiuJtFyPht57aPkcKQmKw",
  "key12": "2gojFSxmgAEWNfcYLCoPdpBA8wafVwnY8t9aLd8ijMDRtHiPkbeb7UevN5UfiW7mb9bo99UCM3paJoA9ukoyLu6Q",
  "key13": "3HA24Ud48oNP9RiSHN7RmgsiYnAPrH85Cx5U1ZNwx4TxKY9wCf7CAE6idFKa4vovcHC3mKcRBsL7nc6t4JBzcUny",
  "key14": "4Nj4hTPGHyBf9dU5aLzpTh1sbiAqiwdFFdD1vZiz6ggXTJEPxgNuRykSGmBtDVdwQkaUvUemCcVMVVAigE1CGAcN",
  "key15": "326RGHTowVe3d7q1w5UweBC3mFwEbBrQGXRnG1P2oV66N2X1XcoQQTYeyvCTvrbGTYzodSmNxTxRqeGEDG8hzQeV",
  "key16": "1dDabX1Rs95c8PSAPJF37ZiY1FrAzJHcmMXynb2HS2qiK1E1i4Y3HVYUBMS6TTPjLfCmDw5WXFKENe6fRaMEehh",
  "key17": "2B3D1tvFtD5KWu9SQzNFjP5HoGJTSRM97ZvdoG7JjvjWRiQfz4rKYT8W1AkweBVtT5FFUqsYUDHcwGXMnWFvYfPH",
  "key18": "3SUA5CBk6GuaBUmEw3vN6wUrXfguLbRHevG3VnW9KWceFbiJwN9WvVNcnNiYuCXkEppBwhaTZRsab1d13DzK7o7P",
  "key19": "3dMq9qqZFKtucZFKhi77z28reXYgvnfxg6HW8vK3XWorfAzCN1nwFY14brbhZyTufoAqxbV2UphJXV2rowKH78L3",
  "key20": "3b971q2bty49eAphqYuSBbVZcDCpqu9cUX3JtVC7fdqbNWiduNonfjeNtTyopYsbXBCfzj6J7nLL9zcsT83BFc5J",
  "key21": "5fMvGrbrxeFQfGZnKt2tLQEmH2553pP7V1FyrK8bXooBkm5MF185CnZsv8tGcUGAa5W9HH6CrGQCotcjvukVmiU8",
  "key22": "5aVZq8zyHpnjVCra5t5msBKqQqePoD1x6qPUrQKdZ1YhZKrbDDfYy3PUEwXiddbJqDaJdZWv39cNwETfjbmryecz",
  "key23": "eMhEMxBcayK3JGnWz1pviPJPRQdcjKTTciofoscGQLiQYpWoku3HsZRM1RNs4iQbx4PMcjEq45sKBqQtRooieuP",
  "key24": "5DmkpcpNLGc4otWLepJ8M2gBBjxS9V43XeLHcoQKha6SdEQcwoSwb5CapKk2xpmvH5H455J2QqJhEtAJCk6hHfos",
  "key25": "6nYV76NnJ2dRzaU5pcKXEy4KpWK8JYeE6TACVdWaAdUUJTv5BgZFTwuRcTeXet1r3f3VRfBUR6DvR8HKnFQKJLn"
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
