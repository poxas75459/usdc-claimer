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
    "iXX9T9Sbzpob4Hg9cLwNvUZtvxkGR9wDWPcMU6Xs5434geUZLYPk1NV6PMGmmx28zSHfacQMqPkKY53SJ7hCtRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wdMxeWKeoimDVBJwjF29AKrwZvPrAZtyzSSHoCT3K7KNgoTXVC4KpPP3Z4yGgnoW4EqcoHwR8XmY2aoFAq2PgqR",
  "key1": "5xET6z7To5hCFuP3RUuPAhZ5qd51hpbXvsViSYrFhtgyPQkXtYxVqniyGyfYA11gzmuvKni9hBWbLLrRdtVi9zmA",
  "key2": "2giwPhxWBeqRhTF3FGXrwBeFpKgHPPYWpVFKHiHJBtZQUtzu1CipvotwmVYMj4qPJrsrur8Aee99JvoRuz8Eve1J",
  "key3": "1gyHBiAyGdwLuxncEKrGRWR7avmrVcRrZdgoisj2cEph44Z2Wsi7znkXqrEUhNFeA8wCm2zC8SBoCENh5sK4Dij",
  "key4": "41xhUFahFxJjtnNe6L7DWkpNuYZKGrcGPCjPHTZ7M4EZTHSbfaWozF7o4Sf6WuN8E66XtKNqJfLzqJiWoL6sqjbq",
  "key5": "2j8aTTxh7nDKyRCAn9aRc8X1Yd46pP5AV7XCN5Q59iDYmEXZfPheW5JLJWPtwmN3mykBqatkBpmpFtvhGLvn2fR8",
  "key6": "4pqP1LexJzCvKAqeJnXhiWBPWhkejwz5CEuENb8Jose2NfLCENTXDhyn383iNSciEB5SCPKi3fbn8tmkiHMahmi7",
  "key7": "4MMJ88drPtZGS8ymQGyR3dgjrbuuxcjwMFg4Bct5DfTvrd9mStAt8NPdqzcBNQaATYgAMZ7QfqrQEVu6fFz4svt1",
  "key8": "4bEZBiLsv6BE5JvUvQUa7H3CfY8gfmso7pq6szFvjhjBWjvzpagr6ZQgopuFTnXYvwp6gLEhQnGqy7fRHDPyMzCS",
  "key9": "3GSY698uamjDbe3uu3xU1Lr5LrHKr7NN3Zd4J6525US51k1S1Z1uPEZZwhCvr4ru5KY7gqrnQHX9UhKZN58bUekU",
  "key10": "33e4Vp5LQciuPAqXJQwJHd3Gv1NF1BdomDontMJ8kNeA5bJJXNm1Atzg4etZe5c7pwvp5HmVxu8jxcuqbXQVacJx",
  "key11": "5YUc5YCZXCVWuh9HSgLFpRFG7pd82tpQ35Cy7CmfSZipnkMBaEsH6dCnzhM2fgmJLnX7JPt1x4Pz78mb5hkZDnbc",
  "key12": "FqVNCaw15TyxhL1bgfeVYbnFkdpYmVG4583kxrn7BrQR2oiQRUkanraa1LBs4kfriLb8KtR81nmFrFu8jZobowt",
  "key13": "5GRZp5GrjHEhA3TPxDetoKsfAXXS5UfMVNNKxabaWoNDsyGaQgsgK7Eham1T1U4GqTVtmN2KM1AtpWACFyxtZspG",
  "key14": "C71pXx4R9jTdcNLQM9TBL6UBn9MsrypQgtb1E1husqnGM3xUYs5yZQw2ypN6PyYbWWCJxdtFwPEH7NsvnXtKSGH",
  "key15": "5QMSvVTELDo1CT1LiMqRhvc2nnRZzQNR7Zun5HD1bcSkxzQHMLkoStT2oiJVGwHuufr4KWeauxjcnpMagFhGGM6p",
  "key16": "rpaBZ1pC3g1HmzvDtgJXQFbKnWiZXGifjbXs6jRuT6wx9qMFdPvU6NYbiRDQZhE6NzyPXtS5JEfYAQWc4f3fonv",
  "key17": "5C5fxuZV2FtY2DZhXvZjg6KxPhWNQbJbn5gjgmLXPHdvxzehbz6jsfkDXa9nZkbeESMoXvNDKEXE3JGFQRuufSd3",
  "key18": "4HiEFckQy9JFxqcBMEKXXrinxMbswkXTZeeR9bL81QemMmxyGycs5mYJRjq9rWCcXsNqrCYFngNCJfYgDcychCRn",
  "key19": "2kDRJCr3SQpGu2Lc44JZNG3DCLzJmUx3uE4hbyfqaPTDdizpGbiUyUcEvozbFPHiAGE15SjtrWJATFvDW74dvCpN",
  "key20": "5ioR7hpTm7egLrnkHzf6xxQQ1PmhEDfbf14erXzvuSXnZZZ5BwFeSMy6AbuTh8DwBaJsZwXSpDxfq7mX3oZXoEcH",
  "key21": "o3ZyDrVhXEUWsvruCzE3TjqJ3fvwSRjNDjF1SWPnnaZLFPrMdzTxEFD57NU9pwxAsKmfegL4AZh4Yei9yLyTVay",
  "key22": "3LYWaLTQ3LWrXW3ogY6QpFcprtX2dPbe5v5gNPHAvtQXMVVP4jK1rY6zSf128eQinuEGvuPEDXDMz21Ue3SLB5k",
  "key23": "2D3rU5bPMQ2atHkSCd7F8v1ykhST1XuQGRcTmb1dYmqVkM8oz53uupdScvBhYkkRg1PxGNhqZxeki4VmgBBUS966",
  "key24": "6Q3wzqestDQUWLc1LB2kkTEYzta3WJdaBsxVL4NsoL13rynGk22h1uCW329z3peA6HkW1Yb1qtPqqttXxzbeZ6v",
  "key25": "3qZviXMww4uvmSy5DGeVnuwcgBTVNmWErDV8UB2by8SamxdeWSzCGzkfNfv9r7rNjUi2MEWf34gjfcjkhKYiwaza",
  "key26": "sUDEXn69wT9dwy5NumRQFG9W6mtC5cXMGz6pesumYSrUbJHjXjFnSUUGVeGf5M2XfnFd6ArtQrsMhsT5RMQCTxM",
  "key27": "3TdkvzqdDSu7q7evpq88KrzmcugbKJYQTSNFEDQNumVr4u6JG1L62XwsnpPcxRbqLgv4CPBrQqtK4sKSk7hRT81S",
  "key28": "56e6PjS7wWEPeK1ugZMxg3JrzJUocnGuZ6EwSemFb2VNPEGcvjWXihat58GcFdoBrpjuarCWueVk6jnKdWh3sqGn",
  "key29": "rVeZBTLHhmf2VnEhTwFahX4oPaKoAjkT4D4aLLeeCtZjXYgAEsLSGsWQ8ajKBSwk2UtTGwxBikpigBET3d1bzeE",
  "key30": "5mwU3cQmtDQYs7uQv2uj6t2G5CyJARQxe1b7JSToc9vQW53P3MS5K7zWTQdrLBzN8hXeTBCMPLeXuiDGZhQ4vRjN"
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
