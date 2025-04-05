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
    "ax43U9XxM68HJoVRyQAjGewEgUaupKWksN6UMxaiXBDySmYBTzNH9sKy1NvshoE7d1cmgZsmQ24Lo5r3i4PSDXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygbq9Qg3mv3DFaTwd58JGgpggaNcwJmZqPB2TUH8aeUqHf5XVXzqkTnpz9k1KT5gxt3wfVmfaQnanzNEDMSUix2",
  "key1": "5QzbhEYdy78KRArZbaiXYnfTi2XPLNNQwT3Vh7y33kz446nYjA6FjGREoM3rieRYhoreCDEYBVAz1dLszpRZxLKK",
  "key2": "5XZ8RE1adcumo416RE8hiKMMk1761ERmTyyoDZyztNdSwqzyrEZN9rNmmFMWfVdutrjQBf9PTtv6KeuYSqa5ytRS",
  "key3": "4RzFaxbqAY14wKipV9sR8fDLLCbrcBoCCpDy2MbLYR4kQSmuxceM9L5KEcuvfYCtEHurmJStsiEjwMWy7DiY8byr",
  "key4": "53crQbyH59tjh45wED2V2sVAghU4kqhG7BmAFVCReY9G1gYpok4mvyGDqkrft7qi7EXU6MifZzPEYRSzJGD13axE",
  "key5": "2Ma8TVTAdc2cT6V2yt6QP632ho7BSGjwU14LPGkyMHKVh1VTSrsM51aXZoC2JSkuo4HUuKo5kjiQgQpijabXswzQ",
  "key6": "2n19NfCSUytUTH2emTzQ81QRGKqsQzv71UANwja29nd78Aysd6Way2GynT8X87jbvKAdp3ywNqavpGcWzghmSTYG",
  "key7": "5kgVARB92wvFX3419dNBqYY9q1jur4yftZKMY6T3Tr5MDhf5zRD8hBDotogqZXPRp6kbvA1BTvZvwCejFwQdokQ",
  "key8": "2YYhfaYSRSY9VzS4as1cstDX2sVrk3yzykzyTsZ7nKi84unrxNj9ME5e4i3nYhejmS3d3etwZm3TiZAkFNBroepm",
  "key9": "4pcQ8vFvxJxcjKKTQr7owyU2RVGL7my8NptuuPkiXd9sorBK4QaPPA9t59NAQreActCsGhkDui7iayfjb9ZxCsBk",
  "key10": "dSfFR9pudjLxGSPe4yJqgUBJeTcp8XZtjnzRxZHvU3p7MoSKtJ7Wcita8MjYV6DDEZDL8Z6VjNwYmih5ohF2Uhs",
  "key11": "54wueEVpsnkC6kArMaoF1Dq1xhqtCF1uqv2T1eUnVKas9spRi2cDPfCamVAHQWMH1qPrKJjHwPk2yTZPYRj4bPFo",
  "key12": "auXfoRSD7vANHTRgunCmQcqygJwdpFsiuJa39iuD5s2u78sJTaxrhHhZwRZ1pAyjNXaoLcf7tVBj34Bo35jGGYA",
  "key13": "4vtGUf3TXeWG3Fjk7XmZaExbceVfSK8WdJyypxpSHCCYEKjM6uAxe2NCnzYZ1Y541BduhwEUuX37QbsjWH83imTK",
  "key14": "317dnSRWdncpR2Nz2iVKXnjdmtTXKSKQc4QEfjzCDJqT5eCrcPJnwthFUZ1gwRC1jvP2F4Z5nkQtRB2ukGb1K9eh",
  "key15": "4e7tWK495DAxLWbLkhj7o8CvHZmL23hauDteZwjSyK48pv8WqvGCYZ54XKKczrvBf1GnMjyXTgtByUDoA8MQtQE6",
  "key16": "5MBjhgn8WQqkcTEN9mdYebxLXEEJ46dkppxZ9WX32pZzek26vwjEAcWtydCgep1Y4Mx9GeKiPAAUYfNBydW48A1n",
  "key17": "3kgknnGfEPgCyLQnJzhcszQV1BoQYaXCRTkJtLsWEpQ8SCdzHg95n3jk6KFEUcBn4bXK379JgZfwfwMLHNwZzgNZ",
  "key18": "2YRRQfJ1wnZMZXkgZXFyKVVoaq8A6ML9H2mN8MMTTMPSBFfCumQbJMCZ7rP7FexkvdpH6LnSKMDgjCpVQKwYgp37",
  "key19": "244a1bdniywGtapSimz4dNFzog2PSNk7RENEGw9j3kjRpafbHseBupfHP3RvUKQtgFhZqERJVtdeLnN5isuaiuAn",
  "key20": "2KWXhobE85e3YPpoxbMShE44chP4hTs2AFBuoXb65xmj7E9wsm9vorwvcUagm2CobmDWGUsYxemKuRNhzKQ5ZvpR",
  "key21": "5SRfkkfF5cEmrrzCuThQN8dFSDDsWHWWgD4qUcAGojzGSM5LYL5UB2XpgZ7NaEVU6pitfkhH72QweDxYdkW9Vbhx",
  "key22": "4fTNriNaLR6vpcjJqBAdv8wH1HfCw1kQ5iBQp9Eck5jbtfujZ1nnHVKt264uufyuUXkmwczJeTTZbcgAztoZ6ghA",
  "key23": "2mCrqqaMYh3R4rkwjkJWdcyxZdwdjMdkFrCNjBhnwmaCuRe71Kf5oa7VGFUoaiRZUmTh7ZtCU3eXnitE5q4CpYA1",
  "key24": "2yJWt51BcDDZPJVgdbcoHy7AhsNiwqjBxqStkmvc8BE5cu42BAC9beTs8hC2SCGwJEmrk8p4EvNBr9B76GPVad6P",
  "key25": "ZKAcrUxVWrsyo7MSqVpGZMo61tXQg9aRTk8FPsfpQ9LnbPzXXpNtx97UrANNtUVBMgRxp4f2EyH7wtGPhRyNFgh"
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
