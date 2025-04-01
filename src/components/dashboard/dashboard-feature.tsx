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
    "2jTomHMNusPfg9cRZXaqWiVr2c1NxsaHSUoMjf8z31osxtisJGnBdcAFbRcM57PtZUaBM1CjymhzCoJUdqdUBW2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lcoxz5wvUuY3VhNRKqJZfC5YZdZtXejTM8Mbf3WMGYCzociSCbvbRCNwEBZen7rPGRghtTE91xivZ1iDR7F7sWa",
  "key1": "5ArXYi2mZZxB5wGtcCzARA4PErCQU3WT1gknR3UfFj85DUAgY1VGbvT31ECvZiszK7bou8tguoyj3of1zbm8VyMS",
  "key2": "4qpgTdkYNwgo1jXkb6cfNmsU62EsiUCc8ZaQX6WQY3yPU3aUXz9zsZZk1SEHrP4xNGyFEefd91fomUNvpMk6x3Yr",
  "key3": "3ABs9B5CArzczuu3LcM3FWsQU2JTXVNwiafvpTdD911gJ57Ux8tLeF3Y9SAyv8Ejkka11T591U5dZhzMxxckRpHz",
  "key4": "3pp54GhKgjENRtAYVfao7QG7hoftyFHLpgGahWkpsbLvkLqUs4jyPmaXq1WsDpnubGuUcdsvgGQREJQ7Ywgs2P97",
  "key5": "2LVxSECqmUov3yhV9qoG8LzZwdtR6LgdHHbT6Yp5ZgfbJFrMNNGtezqR2P85oDuEmFGixUBsWo3rcqg2uYATkVjz",
  "key6": "TLxHa7Rbf2XY3nmGKTxCgsqtZp3MXEwpwH7aXHpjE8WaJpjoqWCwbvkZbTV3WiN1WtWZiKohiFfx38Ka5bfzWtd",
  "key7": "5Y6HnhEMZ9WPTFQ25ZxAdb9AZMPeeRQPMFUaWtT2HoSAXSvd3Lh1MV2kim6bS6wm9kasfya1ExzTRnQtYzjAD4pV",
  "key8": "3nD6vVd8CHLAPQv1N5pFPpVYvwec1kErC5ikxVWbgzKUGAz49W7tJD2oNYCfVhu9zAqYb3ktiNw8xCp5nBJZ9d9r",
  "key9": "3uaTxuu2NybBtEh6R8NuorALnFT7SDvkigWf5hDgpyqLE8sKzCUfjij3g8J97hoykcmdTauRdLjySMoLeMb85K9Z",
  "key10": "3zfoV1RWxbLZSEVYjhXM6891r3ngVthZBadLUpwYjgfmMh9616UqduoNSV4RnrvbJ6LM78dsKH4yi5besjwb7dP5",
  "key11": "4ckWndwPRkZTi26SdEqwHyU8pdJ8XuzZ9MY3ixXL8XzdQzFrHaDPhCaGrxovAZZDm8wbfVCvkc5Mw6iXuUbbpUvd",
  "key12": "4oonW67YRcASnYTXZrzvNMSCEss4oFyxYJaKWBdRaSTkuLUUXLHfdv7F3aaTM5gtBXooExKx4m8WPsBCBEJkoYkw",
  "key13": "4MHyxBhz2iSLD5rnms3Ln7WmjWXi4Xfcsn67MJGoxtoHnbJ8i7zdrgzhLRTU43Ez4WTegVLa8hMwBiEXq2RdoyBc",
  "key14": "4bUguQUPrr5Cp7iAF3P9cAhVm1Eoy1meBZehBLVinW3SGhJ6vzgceeMfNmosPkbxeduKvuFxmFQCeQ2mb1WuQR7u",
  "key15": "57dHjzSLXB8b42XmioCZ2fG5JnFV1hQCf2BfNQpveeL1grGb2VeSYdc9VCsCuhrgpCZUqZQ51pSU9LrVRMtETXeN",
  "key16": "4MzB3hN9tAZhuFknrqj1G5XSWxiwLgjKxr8SbhWudzywNF7JTGqNNYKTntiuL3YzfF65NMpJG7P7yYAiUW4uzbGp",
  "key17": "3m2HkNpaxXEDynTQHbRaRwuFGRjnT9ZEHpTp3oT55yijX7mTLs166d8hBEq9YpGexZdro4b78x3VdMKT5TDBvfsv",
  "key18": "481Vd3VkxYF1wL7uTJ1gnpp23Ei79r74pR8LGgEX1wG1G2gGccVv8BWqZuvB8acWzzPyNc9LRKvPCuNGKnFD6ga6",
  "key19": "4hMZNSK2iBP2MXfMeAM4RwLcF7wvrk3rgJuQe9x64VUbnLWbn6wrxg65qApNuSCoan1EPxFc7PZsM4iMXsbtNftX",
  "key20": "4fnJjK2Rfre99BXMxppAGUyJje923Ro6N9sgySnXQ4uMAxHxvAU4eLDGnYfxSBaWxSNt7CV93D15XYpj5QM9N3tB",
  "key21": "25GbCJ72HTjrTy9jKk5rCHpz87abWZy3gP1N9Sx1LktgYavJcRDo3mF1ewseJogJEasidSt3C1sKJ5nTp3VoVx6b",
  "key22": "32HXaGoVLjtdt73sH1ZVfWznTccx6TsSiFSWpS4PTqaeSKRUvu4yv2hMUe7nHfmwN6eqfbecZTuHCnz2qjZutspJ",
  "key23": "2JtD51KJQkRy3sRY6ExaKc8xY3qTaZ7gvyGG8ES72m1wQd9dA8adEpmUB7QTHAnnDY6FK8buWnfcDf4vY2BRErt7",
  "key24": "53hcvephAQxXayeoGAtgojzxxUYkKjTM9vdGU6nTk8uUmRwqQQ7aA4hoWK71mLAxUWMrPaisvU4praBHj23mdBQz",
  "key25": "4Jr9Uv3SbAtP9AbQqVkFhw7KcE98MENCFMJDYHfn8CcFjSTPue4mVLdu2BgN5j4gHwMm5MwQzaUYUzYkHqmk4tuW",
  "key26": "wsG4kAraDjVzQQ1pzbcCCMWyYNg21HXsxjf76kXrzVwyRUfoabGSeN78QTYyXGpFFuHwXkfTDa9YBkKJG2nLmFL",
  "key27": "5k41eRNgmm8DGSEVZ9169bd2BCuVj4dugoSAjEVE9nuWgVNCf5HsyEwnpuogTNEvuGx5G7557FDybVtmVYy9TtQc",
  "key28": "4XAA4S9Yq1CB72KeGxtgXAva9pYYENQawu1H3FjkvBNsY69TDW9ZSSDaoyk7vGeLPpf183zy6hTZAvyDqo3Aj189",
  "key29": "uVGwZTcTHMi2TG8GHcKu9TTJEWan5hCu5Q3X4iZzgEEgwMWD85RXRLmuGSVofbSK2VnCSsFmxEu5ZocJDbWn3np",
  "key30": "3qNkrbCsz1MA8gq6dH13fi21jTV98jLPGoe8SJ9MTNdgZ7HzuRSDWLmcCBSK4i1sCg1x88dzC6komGKLMWYo7fzJ",
  "key31": "2ucV1PaG1DFR8X4K5pkQ9zKCoUKcYymQBfVsanVza9YUx7pNNX2L4anF9UToq8D7v5nJkdTxPon9Cg7MA2Hhgq2m",
  "key32": "2mHfBiGsudjDdyBt7RLsQWSrYpPC7ko3XrQRP6wARkGsqybrrvkFxgBNAJcDzox9sF4iE1k3b4WTUTDGD1zcZxWo",
  "key33": "54mQAnTdRtEPC4RQkD8bEXuWN7uEy8CfBpULjH3fzFKQes8NKzwDii796Mtd37mFXcR1KJPZLq2ptWAeAVYvrWMB",
  "key34": "5jGLi3WJema8GgPsz1cfJ3M4gSq6Ybps22HRhkRSryuLCfEFiDDJXDbacQxAuKPSQ4a3oSD1k9gQk1HLMuwHDm9k",
  "key35": "5tun1dqGgx8gZ11XqWMpRN9yRXKdjE7NM9HK7BQwRMRyU3BLqFcizCFtpdnZ316JARd7QWLchptbLvGLv8MCYPrC",
  "key36": "yxggfowQtUFmo3RQXJXeK2SWCXa9iYagku7BpvBsNwHEcRJs3yT8TGVbxKcoZeW5KuzBZN7rmudGccguBpMewxt"
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
