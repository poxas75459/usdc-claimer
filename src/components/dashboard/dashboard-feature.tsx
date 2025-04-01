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
    "218ocWuc1m1wkzS1GXPieYdeqXCdVPnGdrp3KEvCUzVNrgvtXduQRgc57snNB6gQ55JenzGFQj3RckyHLvnz4QpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TjmX3emieAHPesYYfVKNAr3fPfBnrHbiXEMzv872nQEjMTJJoSEuJyw3FkoSqQRWXPg4cuxyrdJcpUF68dkUtU",
  "key1": "5FkNgLgnGQZC6itNpsBz7r3JcqAvt1vgVjZmpTm6aaqf1mK4gAXjWNVDd6BPSyvnnGLk1j6TaZPBbDwiYq6z6pWW",
  "key2": "4k3kiR5SRLc9Qc3AnuwMxsEcq9JxbLqxeY9UQjPfXK9eWewhp8Kktcv2YrgPVGgdSgtgHw3DezZQfvEi8HHbY3MW",
  "key3": "34QLTxNqFFAQNycLbJyM5XgJFmyTa6BT3ZEvvSwwHgfae25qVM7fMdEFtVdwhhwSis8TFe8yiimvgHSXfre6fBjJ",
  "key4": "3dc1ckFojho2Jt1xjUjbF9eaxNQsSRhWnzghRB2BdRfW4Urgfwobo7ktBuzQF7tX5Vv82ap1gZzRSEqu3WqFicbt",
  "key5": "3SoXMMqbvgs8oTLnZT9wMG4V4MDRhsz7ewZYtyopPbmPAHLtJ2Mx3zPfYJbTtjbWd5rHnNZo9ojLZeZJNHZwmvRo",
  "key6": "5SDZ6aGwMoAEoNHC6KzaP6fX34xQmfAKJDt8zSaZNggfR8YRRcE5Q3NwwiU2ff3Tmc2uLQDWwcphSXnyybrbNXwf",
  "key7": "2qr3LXbNdpTRw1gH4pTZWrmtrkh2sk4b9GVhVxZK9h9F8mXiKzUGczzVoGsFJjmi6bZGYuRSBCmL9E4ciLp5oNMB",
  "key8": "3qpcwn8GWQjG5HzSHtWSDDeKPNxrN44vNWtARqaDZxL2mvJ2GjxtaabNSGaWQumWeHwZvyDzD5y2ynp9ZyfMTo7G",
  "key9": "3YTwCf64DxGj2EWUVaMbkYodGQpBWKSsEUnyjwbQEg2g9swMcLJbGwL8JUr84psxMCoZGpB7px9bq3zTe19z7yyK",
  "key10": "2fbBifFfCfv4Vcyk4DCrRqHVnmwGTqmu6prTQCeWRhFgcb4b7ACNhd1UKZ2kt9atpsanYG3YVkZVsY6XkJ33NsyL",
  "key11": "KwBvemRZMk5cZmucM4EkqtYhCMntQ7oK5jeafXGab1xzDxVZdUU2iLzBsQEjNeg7d3iDZRs7MWZ1EZ79fn8VpcD",
  "key12": "5QzHRk2YoqBs279F4s1dbN27Mk9EqNBr1jzU6A6FP4KNA6u3JjbBCmn2bWJU52hHo1ZRnu42t2xytoTDhJCQvGmS",
  "key13": "3ye3JVupZ36iaeKrs4hoWaMkdqqDGtJX1o8rQTaacSdUqG4U6jA7JVxGdyYBqMUkbh2GHSWsNK4AKw8uT68FbNUi",
  "key14": "48VHavrfoFbwxf893MNWTudyJn6ozZseo8AgPW8nrnWqi9hSvvc67eEccUq7gPaGfZVyCW7edj4eamtrcvAcejMc",
  "key15": "5DmnApELb9vUzqvWjuasMPHMGA5YoD574frKfr69pK4ihkJEHzvusbgkJqmg66gMKbBJqp1TuWinLvZMGvbQZGA6",
  "key16": "RGnmhNDjaHQiX7z6bxn1hhsEgCGbfjvqYEBeDA4zicJay5T3waxYeFQg46yL89ERhH5k5rAWDjEeJdcqFTAVkKS",
  "key17": "2FwXh6N8fiU56v2FhfcKjoXNBgvevJU2ZtLSq4qVeF3ehABya3bXwfB3Fb8vLhuyaUWeb2M9Ey1w9C96Z9kn9r5s",
  "key18": "n8HUYZqmgkCPk2DE1AsjY3LkJAPtUb3MAqVRxuVbeFwAWt3Lcgm4LMUv113HU6hcZZtaZMNYAABgmXdvALd1cRg",
  "key19": "qDLQPx1wXsAGsH1BhArUHwMKpiYuyjD94pgmaNzjtTvTBaVUZ2uKkMPrWwGRFbFmDevF4ND1JHuJDkSyUVNgoae",
  "key20": "52wg5wcgYgYGUCVuUakM5it5d1LEDFY7jzh6P6zyFTGppyHSnpfPX5Wf7TsSPWvPZBVBiBHaex63LwUN7xUxidPF",
  "key21": "3yfxKT29TYX8Wwy82cEdJim4dZfw6ies1y77mHHq4PtVaANzMMNextFAioNnTJLnG714Jeyvow8BsErrMMrgEvLw",
  "key22": "2Rea4Gj3MVwZL5YJEaURDCSFBfFdVchqRkFn8Y5PiVcf2Gu1v16Qm6wuowGxogVnNbmfKratkHgk9BLByPmGnzy4",
  "key23": "3pEJgEjBzoFyDUwQoiJPbjzrBCPy3QoG7j8vXyLMBuy7cbEvxiXys8eM743yyUzo52nWu8YWBtm1VWts5xt2Zc5k",
  "key24": "3hzVmNRhwxPj8uDKqxoj4W2rJNexJy9n1TRR6zzLwSfw3FQwXWBR8j4zuos6AJgUFgs7wTpjyJUb46N55ExB5h38",
  "key25": "4VGTHTLpCyayC62DzruSurFhkcHQTkMZYpGgaPKELuuF9j986UZUAbpDrUSHDeaKVgpBQX6Nr2imdbWWJG1GKKGT",
  "key26": "61GL1ZnAWbPmUABfEbn8HPALq75NftVCd4YzQPfnf3DbYPpDW3xzDj9z9B3bCvBQ5A3ZN6wMCta2rkfu2e73X1og",
  "key27": "LZyn25NfFodmmpPJLKbMwWhPLQPJw9XM32FAsn7FJSSa2M9JnyLUxmL6E4SGtTVZmk8FzpdbrKrxHHGo1paDBbW",
  "key28": "3CeYNzpGGzmC8DetTittRYvnERqrFrac2H5T1rNWqNakijqqcZn1zYAxKCyhTRyu3akCEKf4MQ3RRSEHUh8f6Tcf",
  "key29": "211e2Ffi8MWybygnYirpi4NeU5WBZCBcTjquj4KwRSwLqxJXmhSn11FPJrEp5YKsKuvJYgqjKn9ZedGVe9ME1WqA",
  "key30": "42uyCsRznY2Qe2LV9uLhHVHzqvfhhRv9aEmsdAtShPMZiEUS6t9V6PDjEhuEnX8V6jZryFNoDNBQEXUmpuaDJVih",
  "key31": "5dJ3onJYm2yekLM7Ps43Gqx21hoJsHVdZzVWB45uSzSfLTzbz95xSqk7as4n4nY3SAyW1VTHy4xPNDnpvfNremJp",
  "key32": "2Ca7jkYNskp61VrNBjAVgByA3sUh429Gy1uFJdNiEnuaXSHge5uKLzHx3PGjZy52EbQwC1opwSxCXPrrC8SHa2Sp",
  "key33": "3Aku7hQLUSb9Zh9wMqtrFZFkVFLz8dEsue9wkwT6tvZqsnNxbFhF23BcrgVQkNhRMzQxKV6KbcRoKtxRmQk7efrv",
  "key34": "5FwwgPF4sZb49yGvz21HAyeCV7Th6YQXMZndY2XLeo7wDpo3GijzPMqEmp22jCrkrKfCg1fSdq2qhQeb374Fs9PR",
  "key35": "5LqtsAx5Yk4AUoLcT45LVM3g9epaVPK4u2YttwFYgmDyLJn5B7NPkdH17xyVuMFRnJYUeBkvAKTQLCEkhrH4hRbk",
  "key36": "5tV6reu5VCcufydfwGDMfY2KtK9BgPVcbjPxrZMnRbV4hGwfC3ZxtDwkcqQuA8H9BDryVSdZkdKDzcMpJ4fEffJk",
  "key37": "39GH7iTGeg2ZuzgHf7kBg5MKNsQBgcrTFa6wxYnUVNxzvXpZtBq1Q5aTTXqKeAMoTSNwiVrLWTRDzAKVz7Js5747",
  "key38": "NhtyELKwnge7n5x1o6tDxMeCeiKbWN6B3EEPZ38DyEAkAft2Y6zDAkVsM5Vy2AbvhDKE5ZoTiWAZJ8r1PnK89YS",
  "key39": "4YxygENBcLtGbfgJYv8WWnk63zy4x9mUaAk6ZhEknSAbUSiLzgBMuysDqvkXZ4yaraqxM9KE5awk6mGRoY8HPJSK",
  "key40": "3D6xwzzRZgkqxMQfq9aMKm9ucmQgBatovUPracC4Kc7MzoC3BsNRh5wHtMevXscyXk3yXQ5AWvvSnGdnhKwmg5yy"
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
