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
    "3kuJBXWMsqaPQLu27J7nqfr8h7KmMc9v5rMonSxXsQiKUbPdZmCDKcm5eWPyqUDxzWhZoAverypdiQgBAfGK1NkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FSKjFD5QXdsCJsYuQvEMQqJc615M9Mog7i5NrzP1nKCusCXjqeDzFde8R5vTMofnR5iJBJ9Ptejk1sJKX5zrPQY",
  "key1": "3DHdGVxHgUbnaHB3pRVg8BobhvY83sEp9iwzCyjyduBEM8S7q49w3zwdQAq4K5HEbhVj8hji4eaHvsBFsjuRkULR",
  "key2": "mJt1gLeFmtppDaDft75cw9EwRSsaZRqNcqTueRBoYS1dnsvomHmgEVxQ3oBBPBE69HVuXsJeRWD3t1doBLYmRBR",
  "key3": "5ry7eEQoftGEDKpWkw3Fq5GXmWXa52gCS1LCgZT1oHnd8CMHLN4KLMd888F7sYrB3LFktb7YmyAAPELrmEoXPEmW",
  "key4": "4sr8tHLEugN2sSuz1LMFTqJjmoAHwCHYYzoTJEaQLss8JxrCiLCwgTffGW8fEN5BVHYxFEgnZAbEwU4quPAXnyVi",
  "key5": "2G22yBGe3NCrjNxuhFXTAzet1rQhEpqsxjdgizcM9h22HBsPLomAj3Lgt88sbkUpmpffXpargCZ4q83DDDNQccvs",
  "key6": "3b3hiDwvQv9RfVdDsz4zc9BpAwWfhsXfKyCiZEfBe4MwxSDm7TLnyvwjcXarv6gh54vUS3V9a2xuSKaEWuaBFRCx",
  "key7": "3MkobiNGg3G22CmWn8x49P3XJDBfdeGYRxMTGqu1mPw4PGrvaNqx7eJKk3rkcpAikoxGz3sZjAgegt3o7y8D67FK",
  "key8": "57u1P3AE6j5iExieoPfoVpQeg4r1Z8MbubFoqdMLRXocVMtccq9KVVU5LQcNfw3YErhT8peSqP3u1ZFNpyqTDjTh",
  "key9": "2DaUaLprtFxCkzfroSkXjh6vd6BGnSFj1jifc3m3ihrpFQrj2tGPpn5iKY5AV9wev2vvGui6vymPUMLtfWk2gvzw",
  "key10": "3FFmwqWEv6qfFLXVottiBvnXmsGa8L1LPttE86M2eAJExXHXhjchR2TsEbdm8csrUS3AegsEwd2i3b6EqeeLaojs",
  "key11": "3aESSWhzKX9MoQYCK35ifPooc2zhsSXVpSkQe8rCjKddYfGfT8DYqhmVwDhweXmSxuNEsnATzchszkUDsZ3MtJ6K",
  "key12": "xfDG9XQiB1KzWunMGAYuemgcft3ZA57Bz3R7xsNJo5fCyj8rRm2t7EZHBCwrpMcuBfKVHCuUb2z2HUJT28km3Tq",
  "key13": "54rRpVirptZk9a7UWHXWBE32WeWJXPzfkfkC62gA2i2VG2MZ6HYHmpTBWzNUCMAZ2dYVjmqmX3wxcz6uJJvKs5Cy",
  "key14": "3CoJaRRw5W5ZxutK68wezp8x5rmb6NzJkBVDDpYiX64RuKpvMKyZt2XdXHL2znNhFJM4xTciRTXZ2j3xV8nVugg2",
  "key15": "3d2qxTzRxk91SYedu6nAEJqQwACW6mGBcVRbec7W5uzXs3UD3u9BNVpcCaaACLsz74jHANWnarxrBc2gn4omPEra",
  "key16": "2DPeSoYcRMQ2cm3KxFm6uKZCrpBnzFBNMheibTdrmnRmSRP1zXS1VwtCaqocq4eDLWE4smyoBsF5HTrdrEy5ZVGi",
  "key17": "3QQXiCDP3K2qNR1UhSgsr3Khkk8ejPvpJSx5ujg2giEFzbtikJ441rRixBWCsGfHjxZToCcpYGLeMCLvGjZuJGA1",
  "key18": "3bXHR5xHcQ8CdR96vRBbfGSRtnk8oieRSTc3jRvZLrHd9qccc5ZZ7BcmWhfyzqz1CzmUVhF3Nm8rNL1unq4ecz5F",
  "key19": "5eEq9ZqU7C8L6q7nCVm6Ht4Vf46n8QSPfK4hp5EvMiFRpE8bWXTWX4LLBB56H9FseADCmdAFLtJg5wReZ59kQUK4",
  "key20": "2PApktUs9xgoKtJAejMMvddpNAyijEjPDSGyTKcTxwM194N8z9XqQyGgtjSDtSabd4bHbujMrjyKspZ1UVmJVVGU",
  "key21": "3ccNmR8uSgrwJhAU49ZixaVSMNRjhrSs4Gq6QLH9XqiCbJ5iksJbTT46YUyfuBkSJyJpzCfPZ1yJC9AG86LtRhL6",
  "key22": "2R42hRxMiNYujTUpCUd3ikH89mmeP1HdJLDqFt4pYqzAJaKaXAgXeuwY7RWXMGY6AfenJ1TrztdjgEmRXry7jxER",
  "key23": "4UBk7XLRpPrXFc1uwDNYrtp5mTzL7NyK2FgAfJZkfEo2jTHh2Vdid6k291HbWMdKkEh2e8N1ZKCDyz6aR6iPXHYj",
  "key24": "5PXcVgnKxszNtPHKb9GwjVNdPCDjMqL6uwU77rT7A9oJYKRTrjnMKkobTsS3PdnYoNe6XWFcem4s3nRFtM67k9FA",
  "key25": "2Vd4ZGe4RRC1Dfne162X5Q7nzPKoLGVjwN4Amkv898qvHaVwbRRN4donXgB53zuaTrr8ig7gzNAG2sDm6NLYZLGP",
  "key26": "3MUsLF6dfnpob4CGzUy31BBeAcsfU8EVLwsYuHovRrE8QrLvHfjwUowzqHdsGE1RFGaVWRSjkWL9233hSgeZDkBh",
  "key27": "4zRURdESnmcCgBcugyubv6q2vQ1u6ueEX2LVkWG29RZuYVEMXvBut7gKiqkyBeT6zpjovjx2zbeZbPhn7HYtP1mv",
  "key28": "wTopRD1uw7yXyutzf5i9KaoQdHLg5BGrEosEw8AVrrygBSL3je8irLPmmQX7J8ZMWnHEv4FiGpugEG6e7DEHxoh",
  "key29": "3nTbncRPZnjjfyyBXRiboUddA1vtK1xHcnXDGS8LCZz5jVBNTZtWd1FMRCuAbcdUhjZrbfDzyNUMhZk3kZ5BGVuR",
  "key30": "4Wd1qvU2r9CG81MRbx2ZD55Czn55F5zGdEKT4ZwJEABHkqUyGb73QQMPtqGM56iHVxm6z6962PSKRXfCVxBu9miF",
  "key31": "Z9xn8LMx67daj2oyGsHeyrS5KT3qLg9MVywy9D6niMFSRPDb5GxBnom3TGiWfaDqibhE6BAQ7ZTVKNt86UY4iNS",
  "key32": "RMSzcTHoBCejoTD51jvT8WbmjQGLkWHkfwrL2DAoczKi5ptDk944e6m24BBPj5xGbd7z7t54HGmFGucE9ycgrvx",
  "key33": "4pGkRdQCSCixwHFsmRdBkdDAQsT2SYVr89VZ1bEoSALAdfmHCab47kkzoptuw2WJyTuiWzvqDDwTbm2VHpXD19ct",
  "key34": "2vSECTYXb3i4ucURwiab37Qa932YXDi1cFm1mvXVc1W7b6AxJEwUZkeA5NECmQMPdKYxWNJCjrBgq3CpfxoBiWDd",
  "key35": "2CVNhToLR2DNmMzgyFthKxTnRi6VRdynQpD2orzK29E7gsumJKyWtv4oQT9goGunCQ5ABUfz5cJpGoWVoWqQiaFg",
  "key36": "3ttszFbVSZpNZb7uov5XdwjG5zWnVvu3sYLrggyjfdRWUFRvQsgr7wPdnvs4mQGdxMKHMhcZERy1cWcf9hxGdsQs",
  "key37": "zXwDQRygFRrq6zKDf3spMWjo8L9rmaaMycrrEcxf8WPuboWkqye67zuqWHKp7Yk5g6VPtdeKbUD88z4EYhGbw7t",
  "key38": "2jaHcBK5MTu3Rvmam9DwnwRhCzA8jgrXFQj1ssCJ8qJfYu4jAdnxbk9zB4d9FjmBBHA8M7R7FSrfVme4jTGu1txT",
  "key39": "HhPmgSg7ZoFkGroFxLZB2zN66871aUGaCtP2b5mG2CJufGnznogJEqja6VW69Swi1inV2HFhuDditx42LxLzz7e",
  "key40": "4dv2cxUV9XdbD2uCcxpuYBMry3v7zQwvdP4CTHeNoGdkJ48NtHXH5mV6uiho1xt3vuW8BMsjnsyZdTQtE1c5u89f",
  "key41": "2cwbu47gqWq8zkRgS6zPnYYsmpC7VD4En6uHTHLW12YGgUwEdRjKmyikuE2Vpie97ZsGkMA4XpAb6KpLySHD2yYo"
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
