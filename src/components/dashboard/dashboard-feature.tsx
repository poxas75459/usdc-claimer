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
    "4tGwPwMDKJYRJLc9RSov689x5jRHeWfD44sRwvAfwnxxpATShTAcvUMnsM9at1J31iQ6nH5BcicDKypEt1xeVTVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XhW8HEKPWHuqJM5E9EA6s6GxbNY6Pg3DGbUxwnPs2ee1DZQkPvG92jgHt6mAUMCN9MRBaQeKnQsVWzDEhu48H4b",
  "key1": "5hqtP5pkLq4csekWEzuEQ8JNHhivutDGR1NAu8YF6NYGH55rG8bngfLoaCLUqq7ereuwNrZw1ng2v7aA9cMk9beU",
  "key2": "t9sFEFh46ZBtFXt8HxFrJo14AtW4tuT5YBwDSVAc18CQbWqYspeb7cdreMLBcF2AcJGJhaBRnAq7uTesbCmdJbi",
  "key3": "3HTXAmtee5Du615vydGmAG5ZnboNKdNAUeSPiE6HEpNCjZq3GQiKFSM7y4VmTSTjBcWSGASmWvauwUNVphFXUkg3",
  "key4": "2v1io9Ai5gKsWAYH42aUJok2ztSrRmxud8ZNB46MG2FM1QvW9DZZfiXi7mtTa1LDApK5Y2D2WMz2KYPYPKZjWBNZ",
  "key5": "4sczjgvZZ7G8r3mVst8hWFPzW3ym82iCvFb45jpAMq5F99f9dBAAWmL5ZDV31Y8ta33WZ7vvPGEccxt4cYGCcszh",
  "key6": "557zjgtoSURgSAqwVLHbmgJYXHeTQT2R55rRUpFypNxyr8QcUzEsh5bHRw1Q4PvYjMveGV9Sjp6Ga6YpVdN1J3rv",
  "key7": "3tpae8hm5PHpDVdHccy6MZHkDQghhfuiaq3M4qR8rzKzVYrMrHN9WW83cHSUEfuhhPHKfn7N2veg9cfiGqV9GWc6",
  "key8": "2tKvvNzaT92h9oH38gqWSJvtiiTqnijfekWLL9mfKiwzPKx12qB1umDQzf3BBLcPrsmNcmRtohrV9D3Gx1zy3xn6",
  "key9": "4DfggzA3Kja2wLm2Zed7QitAJ8NYsJyLdx16bwrYt8thqBK8fHzCXepvLhTMDUaPkt1MUn2jgvvdsT8EhRjxmf15",
  "key10": "5f5aFatM3krQtyVE3DSoRjoLPNzjoMNGLbWN3gpksSiYHTfL4iD7rDmKceB9m2aRdrnCiGXPPxbhowNRTHa5MjnV",
  "key11": "58eJZwU8TafFLBvnM7sdKAdnXZsfBXRwPwEiVUpqPgxD6TjYZyHG35SdAZYYMDbCwUoE11REHU6sKDhywhvgMMA4",
  "key12": "2qwCK8D8PcWuxyzCKg9B3x28wyXtGSXtdhULAYUtgDMEKAvbdcRbjonqdijLNVACiwtVDAUW9rEtzXBUZqU3FDvF",
  "key13": "VJuLqRJfvJq6nvuGiqQW4kGgzSgBpHwiFFC1F1F2XHMHEt649gMa9h49v241mC2u1WvD48uSVTPApoW5jeSWXm4",
  "key14": "4UmJ9MsqRZqCkovGFWujjoMZdkUruLRmRmwydzq6RW6AQx4qbpY6RvZDouX8qT4BYQh2c8WoWmmXUT4caR917k97",
  "key15": "3p5BSyemSSMtfr2aByszBvkN6LoNA6QzyTBngUbExuCm3WPEYKaWbGiFfbT6GjTXGE8dCckojjScxJYwtCpRjpZn",
  "key16": "5ujRvDBzLdz8cTDqTo1GdV4RcERaGw3k5mMQYTjh37yQ5E3Sa1AyAc12TksRi1yaaBcMtpTLmRLbvCemXcM5KC7d",
  "key17": "3ednGsFEH79eLPzH3DfkViTZMsesLKTVByu72KpqMH3MYbd4MVWb6MwXGqkVQcYjkkJShysXV3it48yUBQAQ6Ay2",
  "key18": "5Ces4RycbknmL8HitKj8gCPXzDmSu3JQv2EBK67LUTZJnL6Gr1ev4XHGgBqkLwV7QdJ4GAwSVWyzHB47j29pfcMy",
  "key19": "3BjUsR4yRTi887vh6waKmv3WdMajQQ33545kBQxjBtt8sNbLR7JZvVPg7HyyfiB3Kwis4Fz5p3J4xMZMMULzExLM",
  "key20": "12ZkN2787YLKYeUfuwip2XmVMQhyxR8ErsxHkvQ2mufyZHRcEGunrGYVU2tZwZQD2N9oPgrT2LtxPZcU2LUGCwk",
  "key21": "2pT5sNXSoyVgw8EaEY47wJZirbtpVNnVW3LADUFa1pv6iMvbpAV8Z3x8GFTe9LLWmYsE6bRiWgW6k66uYLUVD9s5",
  "key22": "5YajmJmMdBoriN55pSdDcdtU1yySioNBrRRThLfw9AguJw5GqU1xL1j8RUya4n1KdRStredyMK28LgW2uT27QF9T",
  "key23": "594qbXvtZZLcz2TMERden5AtipsyAZeCfzaogppFsB1wVWabaRmHMP4Mx39jmM3Fgnvww5PEbAoAdryD7dnqwGA2",
  "key24": "5knJr94Wvk4FW2duKp7cS9Cs9c43WtymPGEXZMTkY2p92sar98FeN1xy4mCcxjFqW6PXKPfJhHuCBsxrh8Am1jiL",
  "key25": "4snGEDRcy3nRgGya6cR7h52YH4xgzTp53cLs2nH6E5obMLpysDKhcfYiEf2MBVNZSbx9AgENE4CDmcNkxdDNRdCr",
  "key26": "214X2Ld7FvZfeUNC81pe1kP5sm8btpewDcKMHG8DquW6ZPFxiLziyQv1b94hojK4iDeispGyq6qwVGZ25WrTQ2Yd",
  "key27": "gYo5iWey6FfohK97wHgKrHVRiEDuERvNVYHutMkLv2uDfovqaSqk3bexd9L5ZV6bpDdvEsEfs6YnMnNTXq1tQt2"
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
